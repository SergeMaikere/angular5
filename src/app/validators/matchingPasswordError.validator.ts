import { FormGroup } from '@angular/forms';


export function MatchingPasswordError (password: string, confirmedPassword: string) {

	return (formGroup: FormGroup) => {
		const passwordControl = formGroup.controls[password];
		const confirmedPasswordControl = formGroup.controls[confirmedPassword];

		if (confirmedPasswordControl.errors 
				&& !confirmedPasswordControl.errors.matchingPasswordError) return;

		if (passwordControl.value != confirmedPasswordControl.value) 
			confirmedPasswordControl.setErrors( {matchingPasswordError: true} )
	}
}
