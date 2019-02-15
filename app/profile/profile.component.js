"use strict";
const profile = {
    templateUrl: "app/profile/profile.html",
    controller: ["ProfileService", function (ProfileService) {
        const vm = this;
        vm.profileObject = ProfileService.getUserProfile();
        vm.getEditPage = function () {
            ProfileService.editProfile();
        }

    }]
}

angular.module("ProfileApp")
    .component("profile", profile);