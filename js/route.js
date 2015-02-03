/**
 * Created by Bhargavi Gunda on 03/02/15.
 *
 **/

var myApp = angular.module('myApp', ['ngRoute'])

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
       .when('/home', {
            title: 'Home',
            template: '<p>Hello this is Home page</p>'
        })
        .when('/product', {
            title: 'Product',
            template: '<p>Hello this is Product page</p>'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }]);


myApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        if(current.$$route && current.$$route.title) {
            $rootScope.title = current.$$route.title;
        }
    });
}]);
