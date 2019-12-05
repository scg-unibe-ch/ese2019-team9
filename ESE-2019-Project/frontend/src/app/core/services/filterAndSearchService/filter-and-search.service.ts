import { Injectable } from '@angular/core';
import { isDefined } from '@angular/compiler/src/util';
import { isNullOrUndefined } from 'util';

/**
 * Service to filter, search and sort arrays of objects
 */
@Injectable({
    providedIn: 'root'
})
export class FilterAndSearchService {
    
    /**
     * @ignore
     */
    constructor() { }

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
    search( array: Object[], searchTerm: string, fieldnames?: string[], caseSensitive: boolean = false, skipFieldNames?: string[]): Set<{ obj; key; indices }> {
        if (searchTerm.length < 1) return new Set();
        searchTerm = caseSensitive ? searchTerm : searchTerm.toUpperCase();
        if (!fieldnames) {
            fieldnames = this.getAllKeys(array);
        }
        if (skipFieldNames) {
            fieldnames = fieldnames.filter(
                element => skipFieldNames.indexOf(element) === -1
            );
        }
        if (fieldnames.length < 1) return new Set();

        const result = new Set<{ obj; key; indices }>();
        fieldnames.forEach(key => {
            array.forEach(obj => {
                if (obj.hasOwnProperty(key)) {
                    const objValue = caseSensitive
                        ? obj[key].toString()
                        : obj[key].toString().toUpperCase();
                    const firstIndex = objValue.indexOf(searchTerm);
                    if (firstIndex !== -1) {
                        const indices = [firstIndex];
                        for (let i = firstIndex + 1; i < objValue.length;) {
                            const newIndex = objValue.indexOf(searchTerm, i);
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
    searchUnique(array: Object[], searchTerm: string, fieldnames?: string[], caseSensitive: boolean = false, skipFieldNames?: string[]): Set<{ obj; app }> {
        const resultWithMultipleEntries = this.search(
            array,
            searchTerm,
            fieldnames,
            caseSensitive,
            skipFieldNames
        );
        const result = new Set<{ obj; app: Map<string, number[]> }>();
        const objToMap = new Map<object, Map<string, number[]>>();
        resultWithMultipleEntries.forEach(entry => {
            if (!objToMap.has(entry.obj)) {
                const map = new Map<string, number[]>();
                map.set(entry.key, entry.indices);
                result.add({ obj: entry.obj, app: map });
                objToMap.set(entry.obj, map);
            } else {
                objToMap.get(entry.obj).set(entry.key, entry.indices);
            }
        });
        return result;
    }

    /**
     * Sorts the original array according to the arguments given
     * @param array an Array of object which has to be sorted
     * @param args the arguments for the sorting of the type ```"+fieldname"``` or ```"-fieldname"``` where ```+``` and ```-``` is the sort direction
     * @return the sorted array
     */
    sort(array: Object[], ...args: string[]): Object[] {
        return array.sort((a, b) => {
            let result = 0;
            for (let i = 0; i < args.length && result === 0; i++) {
                const currentArgument: string = args[i];
                const sortOrder: boolean =
                    currentArgument.slice(0, 1) === '+' ? true : false;
                const argument: string = args[i].substring(1);
                const fieldA = this.getField(a, argument);
                const fieldB = this.getField(b, argument);
                if (typeof fieldA === 'string' || typeof fieldB === 'string') {
                    result = sortOrder
                        ? ('' + fieldA)
                            .toLocaleLowerCase()
                            .localeCompare('' + fieldB.toLocaleLowerCase())
                        : ('' + fieldB)
                            .toLocaleLowerCase()
                            .localeCompare('' + fieldA.toLocaleLowerCase());
                } else {
                    result = sortOrder
                        ? fieldA - fieldB
                        : fieldB - fieldA;
                }
            }
            return result;
        });
    }

    /**
     * gets the Field of an Object or child-object
     * @param array the (parent)-Object
     * @param fieldname the string. To get the fieldname of a child-Object submit ``` 'object.fieldnameOfChildObject.fieldname' ```
     * @return the field of type any
     */
    getField(array: object, argument: string) {
        let currentObj = array;
        let split = argument.split('.');
        for (let i = 0; i < split.length; i++) {
            currentObj = currentObj[split[i]];
        }
        return currentObj as any;
    }

    /**
     * Filters the array with the given parameter. Returns a copy of the original array.
     * @param array
     * @param args argument in the type of ```'op;fieldname;value'``` where ```op``` is an operator of therse types:
     * ```>, <, =, !=, >=, <=, ^, $, inc, isNull, isNotNull``` ^ means starts with, $ means ends with, inc means includes
     */
    filter(array: {}[], args: string): {}[] {
        const opMap = new Map<string, (a, b) => boolean>([
            ['>', (a, b) => a > b],
            ['<', (a, b) => a < b],
            ['=', (a, b) => a == b],
            ['!=', (a, b) => a != b],
            ['>=', (a, b) => a >= b],
            ['<=', (a, b) => a <= b],
            ['^', (a, b) => (a as string).startsWith(b as string)],
            ['$', (a, b) => (a as string).endsWith(b as string)],
            ['inc', (a, b) => (a as string).includes(b as string)],
            ['isNull', (a, b) => isNullOrUndefined(a)],
            ['isNotNull', (a, b) => !isNullOrUndefined(a)]
        ]);
        const split = args.split(';');
        if (split.length < 3) return [];
        const op = split[0];
        const fieldname = split[1];
        const value = split[2];
        return array.filter(obj => {
            return opMap.get(op)(obj[fieldname], value);
        });
    }

    /**
     * Filters the array with the given parameters where it filters with an AND connection. Returns a copy of the original array.
     * @param array the array which gets filtered
     * @param args argument in the type of ```'op;fieldname;value'``` where ```op``` is an operator of therse types:
     * ```>, <, =, !=, >=, <=, ^, $, inc``` ^ means starts with, $ means ends with, inc means includes
     */
    public filterComplex(array: {}[], args: string[]) {
        const allObjects: {}[][] = [];
        args.forEach(arg => {
            allObjects.push(this.filter(array, arg));
        });
        allObjects.forEach(currArray => {
            allObjects[0] = allObjects[0].filter(element => {
                return currArray.includes(element);
            });
        });
        return allObjects[0];
    }

    /**
     * Gets all own-keys of an array of objects. Does not return the keys of child-objects
     * @param array the array of objects
     * @return a string array of all keys
     */
    private getAllKeys(array: {}[]): string[] {
        const keys = new Set();
        array.forEach(obj => {
            Object.keys(obj).forEach(key => {
                keys.add(key);
            });
        });
        return Array.from(keys) as string[];
    }

    /**
     * Splits a filter argument to an object
     * @param the filter argument as a string
     * @return an object with the fields:
     *     - name :string
     *     - operator :string
     *     - value :string
     */
    public filterToObject(arg: string): { name: string; operator: string; value: string } {
        const split = arg.split(';');
        return { name: split[1], operator: split[0], value: split[2] };
    }
}
