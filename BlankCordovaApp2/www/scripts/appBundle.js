var App;
(function (App) {
    var TestController = (function () {
        function TestController($scope) {
            $scope.text = "hello";
        }
        return TestController;
    })();
    App.TestController = TestController;
})(App || (App = {}));
// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var BlankCordovaApp2;
(function (BlankCordovaApp2) {
    "use strict";
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        }
        function onPause() {
            // TODO: This application has been suspended. Save application state here.
        }
        function onResume() {
            // TODO: This application has been reactivated. Restore application state here.
        }
    })(Application = BlankCordovaApp2.Application || (BlankCordovaApp2.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(BlankCordovaApp2 || (BlankCordovaApp2 = {}));
// Platform specific overrides will be placed in the merges folder versions of this file 
var App;
(function (App) {
    var app = angular.module("test", []);
    app.controller("TestController", App.TestController);
})(App || (App = {}));
//# sourceMappingURL=appBundle.js.map