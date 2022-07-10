const chai = require('chai');
const sinon = require('sinon');

const productsService = require('../../../services/productsService');
const productsModel = require('../../../models/productsModel');

describe('services/productsService', () => {

  describe('getAll', () => {
    beforeEach(sinon.restore);
    it('Dispara um erro caso a productModel lance um erro', () => {
      sinon.stub(productsModel, 'getAll').rejects();
      return chai.expect(productsService.getAll()).to.eventually.be.rejected;
    });
    it('Não retorna nada caso a lista de produtos esteja vazia', () => {
      sinon.stub(productsModel, 'getAll').resolves([[]]);
      return chai.expect(productsService.getAll(0)).to.eventually.deep.equal([[]]);
    });
    it('Retorna um objeto ao encontrar o item na lista', () => {
      sinon.stub(productsModel, 'getAll').resolves([[{}]]);
      return chai.expect(productsService.getAll(0)).to.eventually.deep.equal([[{}]]);
    });
  })

  describe('getById', () => {
    beforeEach(sinon.restore);
    it('Dispara um erro ao não encontra o id solicitado', () => {
      sinon.stub(productsModel, 'getById').rejects();
      return chai.expect(productsService.getById(0)).to.eventually.be.rejected;
    });
    it('Retorna um objeto ao encontrar o item na lista', () => {
      sinon.stub(productsModel, 'getById').resolves([[{}]]);
      return chai.expect(productsService.getById(0)).to.eventually.deep.equal([[{}]]);
    });
  });
});
