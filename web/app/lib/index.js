import angular from 'angular';
import angularMaterial from 'angular-material';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMessages from 'angular-messages';
import materializeCss from 'materialize-css';
import angularMoment from 'angular-moment';
import ngRoute from 'angular-route';
import ngSanitize from 'angular-sanitize';
import ngCookies  from 'angular-cookies';
import angularUiBootstrap from 'angular-ui-bootstrap';
import angularUiRouter from 'angular-ui-router';
import angularInputMasks from 'angular-input-masks';

// Login dependencies
import passwordConfirm from '../components/login/password.confirm.services';
import AuthenticationService from '../components/login/login.services';
import Base64 from '../components/login/base64.factory';

// App file
import MainRoute from '../components/main.route';

export default angular
	.module('socialnetwork', ['ngRoute', 'ngSanitize', 'ngMaterial', 'ui.router', 'ngCookies', 'angularMoment', 'ui.bootstrap', 'ui.utils.masks'])
   	.constant('API', 'http://'+window.location.hostname+'/api/')
   	.constant('URL', 'http://'+window.location.hostname+'/')
   	.config(MainRoute)
   	.directive('passwordConfirm', () => new passwordConfirm())
   	.factory('AuthenticationService', (Base64, $http, $cookies, $rootScope, $timeout, $route, API) => new AuthenticationService(Base64, $http, $cookies, $rootScope, $timeout, $route, API))
   	.factory('Base64', () => new Base64())
    
    .run(['$rootScope', '$location', '$cookies', '$http', ($rootScope, $location, $cookies, $http) => {
     	
      	$rootScope.globals = $cookies.getObject('globals') || {};

        $rootScope.loggedin = false;
     		
     	if ($rootScope.globals.currentUser) {
         	$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
      	}

      	if($rootScope.globals.currentUser){
         	$rootScope.loggedin = true;
      	}

      	$rootScope.$on('$locationChangeStart', function (event, next, current) {
           
      	     // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
                $rootScope.loggedin = false;
            }

            if($location.path() == '/login'){
                $rootScope.loggedin = false;
            }

            if($rootScope.globals.currentUser){
                $rootScope.loggedin = true;
            }
         	
        });

  	}])

    .directive('headerTp', () => {
        return {
            restrict: 'A',
            //replace: true,
            templateUrl: "/partials/template/header.html",
            controller: ['$scope', '$filter', function ($scope, $filter) {}]
        }
    })
    
    .directive('asideBar', (URL) => {
        return {
            restrict: 'A',
            //replace: true,
            templateUrl: "/partials/template/aside.html",
            controller: ['$scope', '$filter', function ($scope, $filter) {}]
        }
    });