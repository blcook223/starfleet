export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .state('details', {
      url: '/crew/:crewId',
      templateUrl: 'app/details/details.html',
      controller: 'DetailsController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
}
