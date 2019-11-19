import { AbstractControl } from '@angular/forms';
import { Category } from 'src/app/models/category';

export const UniqueValidator = (objArr: Category[], fieldname: string) => {
    return (control:AbstractControl) => {
        return new Promise((resolve) => {
            let workingArray = [...objArr];
            while (workingArray.length > 0) {
                if (workingArray[0][fieldname] === control.value) {
                    resolve({unique: true});
                }
                if ((workingArray[0] as any).subcategories){
                    for (let i = 0; i < (workingArray[0] as any).subcategories.length; i++ ){
                        workingArray.push((workingArray[0] as any).subcategories[i]);
                    }
                }
                workingArray.splice(0,1)
            }
            resolve(null);
        });
    }
  }