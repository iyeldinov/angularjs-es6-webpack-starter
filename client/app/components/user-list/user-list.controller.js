class UserListController {
  constructor() {
  }

  deleteUser(user) {
    if(confirm('Unfriend ' + user.name + '?')) {
      user.$delete(() => {
        this.users = this.users.filter((item) => {
          return item.id !== user.id;
        })
      });
    }

  }
}

export default UserListController;
