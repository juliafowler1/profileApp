"use strict";
function ProfileService($location) {
    const self = this;

    self.profileObject = {
        name: "Johnny",
        contact: "johnnyslurpee@superchill.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit orci. Pellentesque eu magna in est luctus suscipit. Quisque fermentum tincidunt tellus, vel viverra dui condimentum ut. Sed non velit nec elit."

    };

    self.getUserProfile = function () {
        return self.profileObject;

    }
    self.setUserProfile = function (profileObject) {
        self.profileObject = profileObject;
 
    }
    self.editProfile = function () {
        $location.path("/edit-profile");
    };

    self.goHome = function() {
        $location.path("/profile");
    }




    // editProfile redirects the user, using $location, to the /edit-profile route.
}


angular.module("ProfileApp")
    .service("ProfileService", ProfileService);