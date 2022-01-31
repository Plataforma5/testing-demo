const { Model, DataTypes, Sequelize } = require("sequelize");

const sequelize = new Sequelize("testing-sequelize", "postgres", "demo", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

class Student extends Model {}

Student.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    camada: {
      type: DataTypes.INTEGER,
    },
    curso: {
      type: DataTypes.ENUM("Intro", "Bootcamp", "React"),
    },
  },
  { sequelize, modelName: "student" }
);

module.exports = Student;
