var app = angular.module('app', ['ui.router']);

app
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('/', {
        url: '/'
    })
    ;
    $urlRouterProvider.otherwise('/');
})
;

