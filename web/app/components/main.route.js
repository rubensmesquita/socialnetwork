
// Pages
import Dashboard from "./home/home.controller";

// Auth
import Login from "./login/login.controller";
import Sair from "./sair/sair.controller";

export default  function routeConfig($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: '/partials/home.html',
        controller: Dashboard
    })

    .when('/login', {
        templateUrl: '/partials/login.html',
        controller: Login
    })

    .when('/sair', {
        templateUrl: '/partials/sair.html',
        controller: Sair
    })

    .otherwise({ redirectTo: '/' });

}

routeConfig.$inject = ["$routeProvider"];