const { ctrlWrapper } = require("../../helpers");
const getCurrentUser = require("./getCurrentUser");
const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const updateSubscription = require("./updateSubscr");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrentUser: ctrlWrapper(getCurrentUser),
  logout: ctrlWrapper(logout),
  updateSubscription: ctrlWrapper(updateSubscription),
};