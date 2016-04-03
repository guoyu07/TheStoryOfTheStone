﻿(function () {
    'use strict';

    // Ionic Starter App

    // angular.module is a global place for creating, registering and retrieving Angular modules
    // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
    // the 2nd parameter is an array of 'requires'
    // 'starter.services' is found in services.js
    // 'starter.controllers' is found in controllers.js
    angular.module('starter', [
        'ionic', 'ngCordova', 
        'starter.routes', 'starter.controllers', 'starter.services'
    ])
    .config(function ($ionicConfigProvider) {
        // $ionicConfigProvider 相關設定請參考：http://ionicframework.com/docs/nightly/api/provider/%24ionicConfigProvider/
        // 設定所有裝置的 tab 位置在底部（Android 預設在頂端）
        $ionicConfigProvider.tabs.position('bottom');
        $ionicConfigProvider.backButton.text('Back').icon('ion-chevron-left');
    })
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    });

})();