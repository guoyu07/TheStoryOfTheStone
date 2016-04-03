(function() {
    'use strict';

    angular
        .module('About')
        .controller('AboutCtrl', DashCtrl);

    DashCtrl.$inject = ['$scope'];

    function DashCtrl($scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'About';

        activate();

        function activate() { }

        $scope.play = function(src) {
            var media = new Media(src, null, null, mediaStatusCallback);
            $cordovaMedia.play(media);
        }

        var mediaStatusCallback = function(status) {
            if (status == 1) {
                $ionicLoading.show({ template: 'Loading...' });
            } else {
                $ionicLoading.hide();
            }
        }
    }
})();
