const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

const productsController = require('../../../controllers/productsController');
const productsService = require('../../../services/productsService');

describe('controllers/productsController', () => {
  describe('getAll', () => {
    it('Dispara um erro ao não encontra o id solicitado', () => {
      sinon.stub(productsService, 'getAll').rejects();
      return chai.expect(productsController.getAll()).to.eventually.be.rejected;
    });
  })
});