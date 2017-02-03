class passwordConfirm {

	constructor() {
        return {
			require : "ngModel",
	        restrict : "A",
	        scope : {
	            //We will be checking that our input is equals to this expression
	            passwordConfirm : '&'
	        },
	        link: (scope, element, attrs, ctrl) => {
	            //The actual validation
	            function passwordConfirmValidator(modelValue, viewValue) {
	                return modelValue == scope.passwordConfirm();
	            }
	            //Register the validaton when this input changes
	            ctrl.$validators.passwordConfirm = passwordConfirmValidator;
	            //Also validate when the expression changes
	            scope.$watch(scope.passwordConfirm, ctrl.$validate);
	        }
	    };
	}

}

export default passwordConfirm;