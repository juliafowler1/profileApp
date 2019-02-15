"use strict"
const editProfile = {
    templateUrl: "app/editProfile/editProfile.html" 
,
    controller: ["ProfileService",function(ProfileService){
        const vm = this;
        vm.submitForm = function (update) {
            ProfileService.setUserProfile(update);
            ProfileService.goHome();

        }
    }]
}

angular.module("ProfileApp")
    .component("editProfile", editProfile);