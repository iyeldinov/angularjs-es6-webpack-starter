import template from './user.html';
import controller from './user.controller.js';
import './user.styl';

let userComponent = {
  bindings: {
    userData: "="
  },
  template,
  controller
};

export default userComponent;
