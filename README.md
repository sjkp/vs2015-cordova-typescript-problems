# vs2015-cordova-typescript-problems
Sample project illustrating issues with typescript support for cordova apps in VS 2015. 


1)	The way appbundle.js I created is not great, in my sample project you will see that appbundle  contains the code from app.ts before the code from controller.ts, this makes the code not work, when run because App.TestController is undefined when called. If I change the name of app.ts to e.g. xapp.ts, in other words something that comes after the controller.ts alphabetically it will work, but that is not a way to organize things in a large project. 
```javascript
(function (App) {
    var app = angular.module("test", []);
    app.controller("TestController", App.TestController);
})(App || (App = {}));
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
```
2)	The appbundle.js.map that gets generated contains source map references to files in accordance with their location in the visual studio project. "sources":["../../scripts/controllers.ts" this is useless in the browser (Ripple debugging), because the appbundle.js.map file should be used by the browser to map to the ts-files when hosted by the server. Currently e.g. chrome will show empty ts files because they are not at the correct locations (they are not even copied to the platform/android/asset/www folder, which I believe is used when ripple debugging is used). The result is that you are forced to do javascript debugging inside the appbundle.js files, which can get gigantic. 

