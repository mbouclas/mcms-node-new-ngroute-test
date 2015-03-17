(function() {
    angular
        .module('myApp')
        .controller('WelcomeController', WelcomeController);

    function WelcomeController() {
        var vm = this;
        vm.name = 'Michael';

        vm.changeName = function () {
            vm.name = 'Christoph';
        };
    }
})();