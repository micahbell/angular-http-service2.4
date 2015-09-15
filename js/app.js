var app = angular.module('angularHTTP', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateURL: 'index.html',
      controller: 'Http'
    })
    .otherwise({redirectTo: '/'})
});
