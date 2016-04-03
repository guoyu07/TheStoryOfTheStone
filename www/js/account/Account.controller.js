(function () {
    'use strict';

    angular
        .module('Account')
        .controller('AccountCtrl', AccountCtrl);

    AccountCtrl.$inject = [];

    function AccountCtrl() {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Account';

        activate();

        function activate() {
            vm.settings = {
                enableFriends: true
            };
        }
    }
})();
