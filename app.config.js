"use strict";
angular.module("ProfileApp")
.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/profile",{
            template: "<profile></profile>"
        })

        .when("/edit-profile",{
            template: "<edit-profile></edit-profile>"
        })
        .when("/", {
            template: "<profile></profile>"
        })


}]);