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
    })
    .config( [
        '$compileProvider',
        function( $compileProvider )
        {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|skype):/);
            // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
        }
    ]);
