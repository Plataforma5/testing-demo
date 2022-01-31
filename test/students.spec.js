const { expect } = require("chai");
const Students = require("../models");

// Super test
const supertest = require("supertest");
const app = require("../app");
const Student = require("../models");
const agent = supertest.agent(app);

describe("Students Model", () => {
  beforeEach(() => {
    return Students.sync({ force: true });
  });

  it("Se carga un usuario correctamente con name", () => {
    return Students.create({ name: "luis", curso: "Bootcamp" }).then(
      (student) => {
        expect(student).to.have.property("id");
        expect(student.name).to.equal("luis");
      }
    );
  });

  it("Da un error si el name es null", () => {
    return Students.create({})
      .then(() => {
        throw new Error("Should fail on null name value");
      })
      .catch((err) => {
        expect(err.message).to.match(/student.name/);
      });
  });

  it("La propiedad Camada tira un error si recibe algo distinto a number", () => {
    return Students.create({ name: "facu", camada: "enero 2020" })
      .then(() => {
        throw new Error("Should fail on camada value diferent than string");
      })
      .catch((err) => {
        expect(err.message).to.match(/type integer/);
      });
  });
});

describe("Express App", () => {
  beforeEach(() => {
    return Students.sync({ force: true });
  });

  it("La ruta GET /students retorna un array vacio", () => {
    return agent
      .get("/students")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(({ body }) => {
        expect(body).to.have.lengthOf(0);
      });
  });

  it("La ruta GET /students retorna un array vacio", () => {
    return Student.create({ name: "luis", curso: "Intro" }).then(() =>
      agent
        .get("/students")
        .expect("Content-Type", /json/)
        .expect(200)
        .then(({ body }) => {
          expect(body).to.have.lengthOf(1);
        })
    );
  });

  it("La ruta POST /students crea una nueva instancia", () => {
    return agent
      .post("/students")
      .send({ name: "luis", curso: "Bootcamp" })
      .expect("Content-Type", /json/)
      .expect(201)
      .then(({ body }) => {
        expect(body).to.have.property("id");
        expect(body.name).to.equal("luis");
      });
  });
});
