import { Injectable } from '@angular/core';
import { isDefined } from '@angular/compiler/src/util';

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
		console.log(args);
		console.log(args.length);
		return array.sort(function (a,b) {
			let result = 0;
			for (let i = 0; i < args.length && result == 0; i++){
				console.log(i);
				let currentArgument:string  = args[0];
				let sortOrder: boolean = currentArgument.slice(0,1) == "+" ? true : false;
				let argument: string = args[i].substring(1);
				console.log(argument);
				console.log(a[argument]);
				console.log(b[argument]);
				if (typeof (a[argument]) == 'string' || typeof b[argument] == 'string'){
					result = sortOrder ? ('' + a[argument]).toLocaleLowerCase().localeCompare('' + b[argument].toLocaleLowerCase()) : ('' + b[argument]).toLocaleLowerCase().localeCompare('' + a[argument].toLocaleLowerCase());
				}else{
					result = sortOrder ? a[argument] - b[argument] : b[argument] - a[argument];
				}
				
				console.log('result:' + result );
			}
			return result;
		});
	}

	filter() {

	}

	private getAllKeys(array: {}[]): string[] {
		let keys = new Set();
		array.forEach((obj) => {
			Object.keys(obj).forEach((key) => {
				keys.add(key);
			});
		});
		return [...keys] as string[];
	}
}