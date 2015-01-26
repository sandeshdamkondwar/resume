/**
 * ResumeApp Module
 *
 * Description
 */

 angular.module('resume', ['ngRoute'])
    .config(function ($routeProvider) {
        'use strict';

        var routeConfig = {
            controller: 'ResumeCtrl',
            templateUrl: 'app/views/resumeView.html'
        };

        $routeProvider
            .when('/', routeConfig)
            .otherwise({
                redirectTo: '/'
            });
    });
