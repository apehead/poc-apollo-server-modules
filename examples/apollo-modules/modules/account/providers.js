const MOCK_USERS = require('../../../../mocks/users');

exports.Users = {
  getUser(id) {
    return MOCK_USERS.find(user => user.id === id);
  }
};
