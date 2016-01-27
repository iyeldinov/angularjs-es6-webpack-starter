import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource'
import dalUserModule from './../../common/dal/user/dal.user.module';
import userComponent from './user.component.js'

let userModule = angular.module('user', [
    ngResource,
    uiRouter,
    dalUserModule.name
  ])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('user-details', {
        url: '/user/:userId',
        template: '<user user-data="userResolveCtrl.user"></user>',
        resolve: {
          user: (User, $stateParams) => {
            "ngInject";
            return User.get({id: $stateParams.userId}).$promise;
          }
        },
        controller: function(user) {
          "ngInject";
          this.user = user;
        },
        controllerAs: 'userResolveCtrl'
      });
  })
  .component('user', userComponent);

export default userModule;
