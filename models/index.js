const S = require('sequelize');

const db = new S('postgres://postgres@localhost/testing-sequelize', {
  logging: false,
});

class Student extends S.Model {}

Student.init({
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
}, { sequelize: db, modelName: 'student' })

module.exports = Student;
