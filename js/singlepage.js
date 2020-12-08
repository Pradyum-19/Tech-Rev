angular.module('myapp',['ngRoute'])
.config(function($routeProvider){
    $routeProvider
    .when('/',
    {
        templateUrl:'test.html'
    })
    .when('/contact', 
    { 
        templateUrl:'contact.html' 
    }) 
    .otherwise({redirectTo: '/'}); 
})
.controller('mainController',function()
{
})

