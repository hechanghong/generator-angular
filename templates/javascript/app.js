'use strict';

/**
 * @ngdoc overview
 * @name <%= scriptAppName %>
 * @description
 * # <%= scriptAppName %>
 *
 * Main module of the application.
 */
angular
    .module('<%= scriptAppName %>', [<%= angularModules %>])
<% if (ui.router) { %>
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('portal', {
            url: '/portal',
            templateUrl: 'views/portal.html',
            controller: 'PortalCtrl'
        })

    $urlRouterProvider.otherwise('/portal');
})
<% } %>;
<% if (ngRoute) { %>
.config(function($routeProvider, $urlRouterProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.hashPrefix('');
})
<% } %>;