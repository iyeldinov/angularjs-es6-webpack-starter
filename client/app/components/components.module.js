import angular from 'angular';
import User from './user/user.module';
import UserList from './user-list/user-list.module';

let componentModule = angular.module('app.components', [
  User.name,
  UserList.name
]);

export default componentModule;
