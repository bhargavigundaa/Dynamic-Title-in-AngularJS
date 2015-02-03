# Dynamic-Title-in-AngularJS
This repository contains demo for setting page **title** dynamically in AngularJS.

I am going to explain how to set **title** to different pages dynamically in our project.

```JavaScript
var myApp = angular.module('myApp', ['ngRoute']);
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
```

in the above code i have added **title** for each page according to its angular route

```JavaScript
myApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {  //using success callback of route change
        if(current.$$route && current.$$route.title) {                           //Checking whether $$route is initialised or not
            $rootScope.title = current.$$route.title;
        }
    });
}]);
```

While running the app I added a route change success listener callback in which **rootScope** **title** variable is set to **title** of corresponding route.
The above if check is necessary because when no route is defined then it throws an error that "**title** of undefined called"

There are many other similar event listeners like **$routeChangeStart**, **$routeChangeError**, **$routeUpdate** which are functional as their name suggests.
For more information on event listeners refer to **[AngularJS docs](https://docs.angularjs.org/api/ngRoute/service/$route)**.


HTML:

```HTML
<!DOCTYPE html>
<html lang="en"  ng-app="myApp">
<head>
    <title ng-bind="'Page Title ' + title">AngularJS Demo</title>
</head>
<body>
<div>
    <a href="#/home">Home</a><br/>
    <a href="#/product">Product</a><br/>
    <div ng-view></div>
</div>
</html>
```

In this way we can set **title** using **rootScope** variable which is overwritten on every route change success event.
In the similar way we can set meta data for different pages in our project dynamically.