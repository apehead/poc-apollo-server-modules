const { Injectable } = require('@graphql-modules/di');

const MOCK_USERS = require('../../../../mocks/users');

class Users {
  getUser(id) {
    return MOCK_USERS.find(user => user.id === id);
  }
}

module.exports = {
  Users: Injectable()(Users)
};
