import angular from 'angular';
import UserResource from './user.resource';

let dalUserModule = angular.module('dal.user', [])

  .factory('User', UserResource)
  .constant('API_URL', 'http://private-12625-tinatest.apiary-mock.com');

export default dalUserModule;
