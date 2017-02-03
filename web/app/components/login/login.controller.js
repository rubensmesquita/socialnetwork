class LoginController {

	constructor($scope, $rootScope, $http, $timeout, $window, $q, $interpolate, $routeParams, API, $location, AuthenticationService) {
        
        this.$scope = $scope;
        this.$http = $http;
        this.$location = $location;
        this.AuthenticationService = AuthenticationService;
        this.$scope.login_form = {};

        $rootScope.body = "login";
        $rootScope.loginDiv = "container container-table";

       	$scope.login = () => this.login($scope, AuthenticationService, $location);

	}

	login (scope, AuthenticationService, location) {
		scope.dataLoading = true;
		AuthenticationService.Login(scope.login_form, function (response) {
			if (response.success) {
				AuthenticationService.SetCredentials(scope.login_form, response);
				location.path('/dashboard');
			}else{
				scope.error = response.message;
				scope.dataLoading = false;
			}

		});
    };

}

export default LoginController;