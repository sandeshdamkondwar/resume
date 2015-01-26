angular.module('resume')
    .controller('ResumeCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
        'use strict';
        $http.get("app/data/resumeData.json").success(function(data) {
            $scope.resume = data;
        });
    }]);
