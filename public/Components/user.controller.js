(function(){
    angular
        .module('myApp')
        .controller('UserController', UserController);

    UserController.$inject = ['$routeParams'];

    function UserController($routeParams) {
        var vm = this;
        vm.userId = $routeParams.userId;
    }
})();