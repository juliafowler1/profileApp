"use strict";

function PracticeService($location) {
    const self = this;

    self.profileObject = {
        name: "Julia",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu elit orci. Pellentesque eu magna in est luctus suscipit."
    };


    self.setUserProfile = function(profileObject) {
        self.profileObject = profileObject;

    }
    
    self.getUserProfile = function() {
        return self.profileObject;
    }
}