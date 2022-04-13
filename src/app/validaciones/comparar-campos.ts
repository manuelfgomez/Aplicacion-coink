import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function compararCampos(campo1, campo2): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const campoUno = control.get(campo1).value;
        const campoDos = control.get(campo2).value;
        console.log(campoUno, campoDos)
        if ( campoUno != campoDos) {
            const error = { camposIguales: false };
            control.get(campo2).setErrors(error);
        }else{
            control.get(campo2).setErrors(null);
        }
        return null;
    }
}