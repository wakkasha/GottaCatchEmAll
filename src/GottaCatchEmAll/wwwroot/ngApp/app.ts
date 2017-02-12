namespace GottaCatchEmAll {
    angular.module("GottaCatchEmAll", ["ui.router"]).config((
        $stateProvider: ng.ui.IStateProvider,
        $locationProvider: ng.ILocationProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider
    ) => {
        $stateProvider
            .state("master", {
                url: '/',
                templateUrl: `ngApp/views/master.html`,
                controller: GottaCatchEmAll.Controllers.MasterController,
                controllerAs: 'c'
            })
            .state("details", {
                url: `/details/:id`,
                templateUrl: `ngApp/views/details.html`,
                controller: GottaCatchEmAll.Controllers.DetailsController,
                controllerAs: 'c'
            })
            .state("about", {
                url: `/about`,
                templateUrl: `ngApp/views/about.html`,
                controller: GottaCatchEmAll.Controllers.AboutController,
                controllerAs: 'c'
            });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    })
}
