(function() {
    'use strict';

    angular.module('meet-irl', ['ui.router'])
        .config(function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
        });
});