import angular from 'angular';
import uiRouter from 'angular-ui-router'
import ngResource from 'angular-resource'
import dalUserModule from './../../common/dal/user/dal.user.module';
import userListComponent from './user-list.component';

let userListModule = angular.module('userList', [
    uiRouter,
    dalUserModule.name
  ])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('user-list', {
        url: '/',
        template: '<user-list users="userListResolveCtrl.users"></user-list>',
        resolve: {
          users: (User) => {
            "ngInject";
            return User.query().$promise;
          }
        },
        controller: function(users) {
          "ngInject";
          this.users = users;
        },
        controllerAs: 'userListResolveCtrl'
      });
  })

  .component('userList', userListComponent);

export default userListModule;
