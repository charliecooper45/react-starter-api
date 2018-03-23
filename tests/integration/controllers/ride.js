const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

const mongoose = require('mongoose');
require('sinon-mongoose');

const server = require('../../../main');
const {
  mock,
  mockThrow,
  mockPrototype,
  mockPrototypeThrow
} = require('../../utils/mock');
const resetModels = require('../../utils/db');

const Ride = mongoose.model('Ride');

describe('rides', () => {
  after(resetModels);

  describe('list rides', () => {
    afterEach(() => Ride.find.restore());

    it('it should list all rides', (done) => {
      const rides = [
        {
          id: 1, title: 'Lunch time loop', distance: '20.3'
        },
        {
          id: 2, title: 'Sunday Spin', distance: '80.91'
        }
      ];
      mock(Ride, 'find', rides);

      chai.request(server)
        .get('/rides')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.eql(rides);
          done();
        });
    });

    it('it should list empty rides', (done) => {
      mock(Ride, 'find', []);

      chai.request(server)
        .get('/rides')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });

    it('it should handle errors', (done) => {
      mockThrow(Ride, 'find');

      chai.request(server)
        .get('/rides')
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.eql({ status: 500, message: 'Error' });
          done();
        });
    });
  });

  describe('create ride', () => {
    afterEach(() => Ride.prototype.save.restore());

    it('it should create a ride', (done) => {
      mockPrototype(Ride, 'save');

      chai.request(server)
        .post('/rides')
        .send({
          title: 'Lunch time loop',
          distance: '20.3'
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.include({ distance: 20.3, title: 'Lunch time loop' });
          done();
        });
    });

    it('it should handle errors', (done) => {
      mockPrototypeThrow(Ride, 'save');

      chai.request(server)
        .post('/rides')
        .send({
          title: 'Lunch time loop',
          distance: '20.3'
        })
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.eql({ status: 500, message: 'Error' });
          done();
        });
    });
  });

  describe('delete ride', () => {
    afterEach(() => Ride.remove.restore());

    it('it should delete a ride', (done) => {
      mock(Ride, 'remove');

      chai.request(server)
        .delete('/rides/5ab124350f582dd87a570225')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.eql({ id: '5ab124350f582dd87a570225', message: 'Ride deleted' });
          done();
        });
    });

    it('it should handle errors', (done) => {
      mockThrow(Ride, 'remove');

      chai.request(server)
        .delete('/rides/5ab124350f582dd87a570225')
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.eql({ status: 500, message: 'Error' });
          done();
        });
    });
  });
});
