const S = require("sequelize");

const sequelize = new Sequelize("testing-sequelize", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

class Student extends S.Model {}

Student.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    camada: {
      type: S.STRING,
    },
    curso: {
      type: S.ENUM("Intro", "Bootcamp", "React"),
    },
  },
  { sequelize, modelName: "student" }
);

module.exports = Student;
