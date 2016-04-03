(function () {
    'use strict';

    angular
        .module('About')
        .controller('AboutCtrl', DashCtrl);

    DashCtrl.$inject = ['$cordovaMedia', '$ionicLoading', 'MediaSrv'];

    function DashCtrl($cordovaMedia, $ionicLoading, MediaSrv) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'About';

        activate();

        function activate() { }


        // Play audio
        //vm.play = function (url) {
        //    // Play the audio file at url
        //    var my_media = new Media(url,
        //        // success callback
        //        function () {
        //            console.log("playAudio():Audio Success");
        //        },
        //        // error callback
        //        function (err) {
        //            console.log("playAudio():Audio Error: " + err);
        //        }
        //    );
        //    document.addEventListener('deviceready', onDeviceReady, false);
        //    function onDeviceReady() {
        //        console.log(cordova.platformId);

        //        // Play audio
        //        my_media.play();
        //    }
        //}

        vm.play = function (url) { 
            MediaSrv.loadMedia(url).then(function (media) {
                media.play();
            });
        };
    }
})();
