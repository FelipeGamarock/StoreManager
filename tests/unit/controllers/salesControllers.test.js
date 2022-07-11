const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

const salesController = require('../../../controllers/salesController');
const salesService = require('../../../services/salesService');

describe('controllers/salesController', () => {
  describe('getAll', () => {
    it('Dispara um erro ao não encontra o id solicitado', () => {
      sinon.stub(salesService, 'getAll').rejects();
      return chai.expect(salesController.getAll()).to.eventually.be.rejected;
    });

  })
});

