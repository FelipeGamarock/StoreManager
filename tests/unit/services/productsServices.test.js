const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

const productsService = require('../../../services/productsService');
const productsModel = require('../../../models/productsModel');

chai.use(chaiAsPromised);


describe('models/productsModel', () => {
  describe('getById', () => {
    beforeEach(sinon.restore);
    it('Dispara um erro ao não encontra o id solicitado', () => {
      sinon.stub(productsModel, 'getById').rejects();
      return chai.expect(productsService.getById(0)).to.eventually.be.rejected;
    });
    it('Não retorna nada caso a lista de produtos esteja vazia', () => {
      sinon.stub(productsModel, 'getById').resolves([[]]);
      return chai.expect(productsService.getById(0)).to.eventually.throw(Error);
    });
    it('Retorna um objeto ao encontrar o item na lista', () => {
      sinon.stub(productsModel, 'getById').resolves([[{}]]);
      return chai.expect(productsService.getById(0)).to.eventually.deep.equal({});
    });
  });

  describe('getAll', () => {
    beforeEach(sinon.restore);
    it('Dispara um erro caso a productModel lance um erro', () => {
      sinon.stub(productsModel, 'getAll').rejects();
      return chai.expect(productsService.getAll()).to.eventually.be.rejected;
    });
    it('Não retorna nada caso a lista de produtos esteja vazia', () => {
      sinon.stub(productsModel, 'execute').resolves([[]]);
      return chai.expect(productsService.getAll(0)).to.eventually.be.undefined;
    });
    it('Retorna um objeto ao encontrar o item na lista', () => {
      sinon.stub(productsModel, 'execute').resolves([[{}]]);
      return chai.expect(productsService.getAll(0)).to.eventually.deep.equal({});
    });
  })
});
