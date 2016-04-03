(function () {
    'use strict';

    angular
        .module('Chats')
        .controller('ChatDetailCtrl', ChatDetailCtrl);

    ChatDetailCtrl.$inject = ['$stateParams', 'chats'];

    function ChatDetailCtrl($stateParams, chats) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'ChatDetail';

        activate();

        function activate() {
            vm.chat = chats.get($stateParams.chatId);
        }
    }
})();
