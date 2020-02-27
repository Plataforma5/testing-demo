const S = require('sequelize');

const db = new S('postgres://postgres@localhost/testing-sequelize', {
  logging: false,
});

module.exports = db.define('student', {
  name: {
    type: S.STRING,
    allowNull: false,
  },
  camada: {
    type: S.STRING,
  },
  curso: {
    type: S.ENUM(
      'Intro',
      'Bootcamp',
      'React'),
  },

});