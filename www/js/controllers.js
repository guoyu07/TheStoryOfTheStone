(function () {
    'use strict';

    angular
        .module('starter.controllers', ['About', 'Chats', 'Account'])
        .controller('Controller', Controller)

    Controller.$inject = [];
    function Controller() {
        /* jshint validthis:true */
        var vm = this;
    }
})();