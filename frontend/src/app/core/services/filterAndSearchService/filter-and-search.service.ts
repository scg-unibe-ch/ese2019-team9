import { Injectable } from '@angular/core';
import { isDefined } from '@angular/compiler/src/util';
import { isNullOrUndefined } from 'util';

@Injectable({
	providedIn: 'root'
})
export class FilterAndSearchService {

	constructor() { }

	/**
	 * Searches the given term in all given fieldnames of the array
	 * @param array the array of objects in which to search for
	 * @param searchTerm the string to search for
	 * @param fieldnames optional parameter of all fieldnames as strings, if not all fields should be searched 
	 * @param caseSensitive optional boolean parameter if the search should be caseSensitive
	 * @param skipFieldNames optional string Array of fieldnames to skip
	 */
	search(array: Object[], searchTerm: string, fieldnames?: string[], caseSensitive: boolean = false, skipFieldNames?: string[]) :Set<({obj, key, indices})> {
		if (searchTerm.length < 1) return new Set();
		searchTerm = caseSensitive ? searchTerm : searchTerm.toUpperCase();
		if (!fieldnames) {
			fieldnames = this.getAllKeys(array);
		}
		if (skipFieldNames) {
			fieldnames = fieldnames.filter(element => 
				skipFieldNames.indexOf(element) === -1
			);
		}

		if(fieldnames.length < 1) return new Set();

		let result = new Set<{obj, key, indices}>();
		fieldnames.forEach((key) => {
			array.forEach((obj) => {
				if (obj.hasOwnProperty(key)) {
					let objValue = caseSensitive ? obj[key].toString() : obj[key].toString().toUpperCase();
					let firstIndex = objValue.indexOf(searchTerm);
					if (firstIndex !== -1) {
						const indices = [firstIndex];
						for (let i = firstIndex + 1; i < objValue.length;) {
							let newIndex = objValue.indexOf(searchTerm, i);
							if (newIndex !== -1) {
								indices.push(newIndex);
								i = newIndex + 1;
							} else {
								break;
							}
						}
						result.add({ obj, key, indices });
					}
				}
			});
		});
		return result;
	}

	/**
		 * Searches the given term in all given fieldnames of the array
		 * @param array the array of objects in which to search for
		 * @param searchTerm the string to search for
		 * @param fieldnames optional parameter of all fieldnames as strings, if not all fields should be searched 
		 * @param caseSensitive optional boolean parameter if the search should be caseSensitive
		 * @param skipFieldNames optional string Array of fieldnames to skip
		 * @return a Set of Objects containing a key with the object that was found and a key with a map for all fieldnames and their corresponding indices
		 * return example: ``` Set<{obj: Object, app: Map<fieldname: string, indices: number[]>}> ``` 
		 */
	searchUnique(array: Object[], searchTerm: string, fieldnames?: string[], caseSensitive: boolean = false, skipFieldNames?: string[]) :Set<{obj, app}> {
		let resultWithMultipleEntries = this.search(array, searchTerm, fieldnames, caseSensitive, skipFieldNames);
		let result = new Set<{obj, app: Map<string, number[]>}>();
		let objToMap = new Map<object, Map<string, number[]>>();
		resultWithMultipleEntries.forEach((entry) => {
			if (!objToMap.has(entry.obj)){
				let map = new Map<string, number[]>();
				map.set(entry.key, entry.indices);
				result.add({obj: entry.obj, app: map});
				objToMap.set(entry.obj, map);
			}else {
				objToMap.get(entry.obj).set(entry.key, entry.indices);
			}
		});	
		return result;
	}

	/**
	 * 
	 * @param array an Array of object which has to be sorted
	 * @param args the arguments for the sorting of the type ```"+fieldname"``` or ```"-fieldname"``` where ```+``` and ```-``` is the sort direction
	 * @return the sorted array
	 */
	sort(array: Object[], ...args: string[]): Object[] {
		return array.sort(function (a,b) {
			let result = 0;
			for (let i = 0; i < args.length && result == 0; i++){
				let currentArgument:string  = args[i];
				let sortOrder: boolean = currentArgument.slice(0,1) == "+" ? true : false;
				let argument: string = args[i].substring(1);
				if (typeof (a[argument]) == 'string' || typeof b[argument] == 'string'){
					result = sortOrder ? ('' + a[argument]).toLocaleLowerCase().localeCompare('' + b[argument].toLocaleLowerCase()) : ('' + b[argument]).toLocaleLowerCase().localeCompare('' + a[argument].toLocaleLowerCase());
				}else{
					result = sortOrder ? a[argument] - b[argument] : b[argument] - a[argument];
				}
			}
			return result;
		});
	}

	/**
	 * Filters the array with the given parameter. Returns a copy of the original array.
	 * @param array 
	 * @param args argument in the type of ```'op;fieldname;value'``` where ```op``` is an operator of therse types:
	 * ```>, <, =, !=, >=, <=, ^, $, inc, isNull, isNotNull``` ^ means starts with, $ means ends with, inc means includes
	 */
	filter(array: {}[], args: string) :{}[] {
		let opMap = new Map<string, Function>([
			['>',  (a,b) =>  a > b],
			['<',  (a,b) =>  a < b],
			['=',  (a,b) =>  a == b],
			['!=',  (a,b) =>  a != b],
			['>=',  (a,b) =>  a >= b],
			['<=',  (a,b) =>  a <= b],
			['^',  (a,b) =>  (a as string).startsWith(b as string)],
			['$',  (a,b) =>  (a as string).endsWith(b as string)],
			['inc',  (a,b) =>  (a as string).includes(b as string)],
			['isNull',  (a,b) =>  isNullOrUndefined(a)],
			['isNotNull',  (a,b) => !isNullOrUndefined(a)],
		]);
		const split = args.split(';');
		if (split.length < 3) return [];
		const op = split[0];
		const fieldname = split[1];
		const value = split[2];
		return array.filter((obj) => {
			return opMap.get(op)(obj[fieldname], value)
		});

	}

	/**
	 * Filters the array with the given parameters where it filters with an AND connection. Returns a copy of the original array. 
	 * @param array 
	 * @param args argument in the type of ```'op;fieldname;value'``` where ```op``` is an operator of therse types:
	 * ```>, <, =, !=, >=, <=, ^, $, inc``` ^ means starts with, $ means ends with, inc means includes
	 */
	public filterComplex(array: {}[], args: string[]){
		let allObjects: {}[][] = [];
		args.forEach((arg) => {
			allObjects.push(this.filter(array, arg));
		});
		allObjects.forEach((currArray) => {
			allObjects[0] = allObjects[0].filter((element) => {
				return currArray.includes(element)
			});
		});
		return allObjects[0];
	}

	private getAllKeys(array: {}[]): string[] {
		let keys = new Set();
		array.forEach((obj) => {
			Object.keys(obj).forEach((key) => {
				keys.add(key);
			});
		});
		return Array.from(keys) as string[];
	}

	public filterToObject(arg: string): {name: string, operator: string, value: string} {
		const split = arg.split(';');
		return {name: split[1], operator: split[0], value: split[2]};
	}
}
