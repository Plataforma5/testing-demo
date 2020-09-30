const Student = require('../models');

const chai = require('chai');
const expect = chai.expect;

// The forced-error test (FET) consists of negative test cases that are designed to force a program into error conditions

describe('Student Model', () => {
  /*
    before() is run once before all the tests in a describe
    after()   is run once after all the tests in a describe
    beforeEach() is run before each test in a describe
    afterEach()   is run after each test in a describe
  */
  before(() => {
    return Student.sync({ force: true });
  });

  describe('Validations', () => {
    // https://mochajs.org/#working-with-promises
    // si le agregamos el done como parámetro mocha sabe que voy a hacer algo asincrónico, y necesita ejecutarse luego para terminar esa expectativa, sino queda esperando...
    
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

        /*
        //Using Instances: https://sequelize.org/master/manual/model-instances.html
        const student = Student.build({}); // sincrónico
        student.validate()
          .then(() => done(new Error('Debería haber arrojado un error')))
            .catch(() => {
              done();
            });
        */

      });

      
      it('should validate ok when name has a string', () => {
        return Student.create({
          name: 'Guille'
        }) //this is returning a promise and the results impact in done directly
        
      });
      // Probar sacarle el return y poner un name: [], ver que pasa igual los tests, porque no entiende mocha que es asincronico, no ve error y lo aprueba , el error llega más tarde...

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



  describe('Find students', () => {
    before(() => {
      return Student.create({
        name: 'Pepe',
        camada: '32020',
        curso: 'Bootcamp'
      })
    });
     
    it('should return an array of students', function(){
      Student.findAll()
        .then(students => {
          expect(students).to.be.an('array');
          expect(students).to.have.lengthOf(2);
        })
    })

    /*
    it('should return an array of students', function(done){
      Student.findAll() //todos los métodos son promesifica2
        .then(students => {
          expect(students).to.be.an('array');
          done()
        })
    })*/
    // podemos ver al done como el 'next' de node y expres..
    // catch(error=>done(error)) === catch(done)

  });

  
})


/* 
////////////////// OTROS EJEMPLOS

// En caso de no tener promesas, por ejemplo con callbacks:
it('aaaa', function(done){
  readFile(function(content){ // funcion sincronica
      //hace algo con ese content
       expect(content).to.be.an('object');
       done(); //le aviso a mocha que ya está hecho...
  })
})

// otros ejemplos
getUsers().
        then((res) => {
          expect(res).to.eql([
            {id: 1, name: 'Leanne Graham'},
            {id: 2, name: 'Ervin Howel'}
          ]); 
        })
+       .then(() => done(), done);
*/



