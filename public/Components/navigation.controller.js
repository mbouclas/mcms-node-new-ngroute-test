(function(){
    angular
        .module('myApp')
        .controller('NavigationController', NavigationController);

    NavigationController.$inject = ['$routeParams'];

    function NavigationController($routeParams) {
        var vm = this;

    }
})();