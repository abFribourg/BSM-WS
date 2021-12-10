const users = require('./users/users.service.js');
const documents = require('./documents/documents.service.js');
const projects = require('./projects/projects.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(documents);
  app.configure(projects);
};
