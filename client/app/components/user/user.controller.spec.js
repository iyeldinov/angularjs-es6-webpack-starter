//spec here
import UserModule from './user.module'
import UserController from './user.controller';
import UserComponent from './user.component';
import UserTemplate from './user.html';

describe('User', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UserModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UserController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('should instantiate', () => {
      let controller = makeController();
    });
  });

  describe('Template', () => {
    // template specs
  });

  describe('Component', () => {
    // component/directive specs
    let component = UserComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(UserTemplate);
    });


    it('invokes the right controller', () => {
      expect(component.controller).toEqual(UserController);
    });
  });
});
