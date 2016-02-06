import UserlistModule from './user-list.module'
import UserlistController from './user-list.controller';
import UserlistComponent from './user-list.component';
import UserlistTemplate from './user-list.html';

describe('Userlist', () => {
  let $rootScope, makeController, sut;

  beforeEach(window.module(UserlistModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    sut =  new UserlistController();
    spyOn(window, 'confirm').and.callFake(function () {
      return true;
    });
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs

    it('should delete user', () => {
      let $delete = jasmine.createSpy('$delete').and.callFake(function(successCb) {
        successCb();
      });

      sut.users = [{id: 10, $delete: $delete}, {id: 11, $delete: $delete}];
      sut.deleteUser(sut.users[0]);
      expect($delete).toHaveBeenCalled();
      expect(sut.users.length).toEqual(1);
      expect(sut.users).toEqual([{id: 11, $delete: $delete}]);
    })
  });

  describe('Template', () => {
    // template specs
  });

  describe('Component', () => {
      // component/directive specs
      let component = UserlistComponent;

      it('includes the intended template',() => {
        expect(component.template).toEqual(UserlistTemplate);
      });


      it('invokes the right controller', () => {
        expect(component.controller).toEqual(UserlistController);
      });
  });
});
