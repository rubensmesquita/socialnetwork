class SairController {

	constructor($scope, $http, $timeout, $window, $q, $interpolate, $routeParams, API, $location, AuthenticationService) {
        
        this.$scope = $scope;
        this.$http = $http;
        this.$location = $location;
        
        AuthenticationService.ClearCredentials();
		$location.path('/login');

	}

}

export default SairController;