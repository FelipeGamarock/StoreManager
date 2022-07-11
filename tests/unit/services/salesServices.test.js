const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

const salesService = require('../../../services/salesService');
const salesModel = require('../../../models/salesModel');

describe('services/salesService', () => {

  describe('getAll', () => {
    beforeEach(sinon.restore);
    it('Dispara um erro caso a productModel lance um erro', () => {
      sinon.stub(salesModel, 'getAll').rejects();
      return chai.expect(salesService.getAll()).to.eventually.be.rejected;
    });
    it('Não retorna nada caso a lista de produtos esteja vazia', () => {
      sinon.stub(salesModel, 'getAll').resolves([[]]);
      return chai.expect(salesService.getAll(0)).to.eventually.deep.equal([[]]);
    });
    it('Retorna um objeto ao encontrar o item na lista', () => {
      sinon.stub(salesModel, 'getAll').resolves([[{}]]);
      return chai.expect(salesService.getAll(0)).to.eventually.deep.equal([[{}]]);
    });
  })

  describe('getById', () => {
    beforeEach(sinon.restore);
    it('Dispara um erro ao não encontra o id solicitado', () => {
      sinon.stub(salesModel, 'getById').rejects();
      return chai.expect(salesService.getById(0)).to.eventually.be.rejected;
    });
    it('Retorna um erro ao quando o produto não é encontrado', () => {
      sinon.stub(salesModel, 'getById').resolves('');
      return chai.expect(salesService.getById()).to.eventually.deep.rejectedWith(Error);
    });
    it('Retorna um objeto ao encontrar o item na lista', () => {
      sinon.stub(salesModel, 'getById').resolves([[{}]]);
      return chai.expect(salesService.getById()).to.eventually.deep.equal([[{}]]);
    });
  });
});