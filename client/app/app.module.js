import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularLoadingBar from 'angular-loading-bar'
import Common from './common/common.module';
import Components from './components/components.module';
import AppComponent from './app.component';

import 'bootstrap/dist/css/bootstrap.css'
import 'angular-loading-bar/build/loading-bar.css'

angular.module('app', [
    uiRouter,
    angularLoadingBar,
    Common.name,
    Components.name
  ])

  .component('app', AppComponent)
  .constant('API_URL', 'http://private-12625-tinatest.apiary-mock.com');
