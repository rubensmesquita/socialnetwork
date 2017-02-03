class AuthenticationService {

	constructor(Base64, $http, $cookies, $rootScope, $timeout, $route, API) {
        var service = {};

        service.Login = function (data, callback) {

            $timeout(function () {
                $http.post(API+'auth', { username: data.username, password: data.password })
                .then((response) => {
                    callback(response.data);
                });
            }, 1000);

        };

        service.SetCredentials = function (loginData, data) {
            var authdata = Base64.encode(loginData.username + ':' + loginData.password);

            $rootScope.globals = {
                currentUser: {
                    username: loginData.username,
                    authdata: authdata,
                    token: data.sessionToken
                }
            };

            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $cookies.putObject('globals', $rootScope.globals);

        };

        service.ClearCredentials = function () {
            $rootScope.globals = {};
            $cookies.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
            $route.reload();
        };

        return service;
	}

}

export default AuthenticationService;