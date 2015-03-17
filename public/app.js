(function(){
    angular.module('myApp', ['ngNewRouter'])
        .controller('AppController',AppController)
        .config(appConfig);

    AppController.$inject = ['$router'];
    appConfig.$inject = ['$componentLoaderProvider'];

    function appConfig($componentLoaderProvider){
        $componentLoaderProvider.setTemplateMapping(function (name) {
            // name == component name
            return 'Components/' + name + '.component.html';
        });
    }

    function AppController($router){
        $router.config([
            {
                path: '/',
                component: {
                    navigation: 'navigation',
                    main: 'welcome'
                }
            },
            {
                path: '/user/:userId',
                component: 'user'
            }
        ]);
    }
})();
