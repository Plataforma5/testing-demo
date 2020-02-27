const Student = require('../models');

// The forced-error test (FET) consists of negative test cases that are designed to force a program into error conditions

describe('Model Student', () => {
  before(() => {
    return Student.sync({ force: true });
  });

  describe('Validations', () => {
    
    describe('property name', () => {
      it("deberia tener un name", (done) => {
        //done() --> OK
        //done(something) --> Error
        Student.create({})
          .then(() => done(new Error("el name es obligatorio")))
          .catch(() => done());
      });

      it('should throw an error if not a string', (done) => {
        Student.create({
          name: []
        })
          .then(() => done(new Error('Debería haber arrojado un error')))
          .catch(() => done());
      });

      it('should validate ok when name has a string', () => {
        return Student.create({
          name: 'Guille'
        }); //this is returning a promise and the results impact in done directly
      });
    })


    describe('camada', () => {
      it('should throw an error if it is not a string', (done) => {
        Student.create({
          camada: [],
        })
          .then(() => done(new Error('should not have validate')))
          .catch(() => done()) 
      });
    });
  })
  
})