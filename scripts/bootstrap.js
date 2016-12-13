(function () {
    'use strict';
    //定义angular模块
    define('angular', function () {
        if (angular) {
            return angular;
        }
        return {};
    });
    //定义angular 主moudle
    define('app', ['angular'], function (angular) {
        var app = angular.module('app', ['ngRoute', 'ui.router', 'oc.lazyLoad']);
        return app;           
    });
    //启动angular
    require([
        'dojo/ready',
        'app'
    ], function (ready, app) {
        ready(function () {
            console.info('start the bootstrapper');            
            // 启动angular
            angular.bootstrap(document.body, ['app']);
        });
    });
}).call(this);
