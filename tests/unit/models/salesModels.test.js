const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

const connection = require('../../../models/connection');
const salesModel = require('../../../models/salesModel');

describe('models/salesModel', () => {

  describe('getAll', () => {
    beforeEach(sinon.restore);
    it('Dispara um erro ao não encontra o id solicitado', () => {
      sinon.stub(connection, 'execute').rejects();
      return chai.expect(salesModel.getAll(0)).to.eventually.be.rejected;
    });
    it('Retorna um objeto ao encontrar o item na lista', () => {
      sinon.stub(connection, 'execute').resolves([[{}]]);
      return chai.expect(salesModel.getAll(0)).to.eventually.deep.equal([{}]);
    });
  })

  describe('getById', () => {
    beforeEach(sinon.restore);
    it('Dispara um erro ao não encontra o id solicitado', () => {
      sinon.stub(connection, 'execute').rejects();
      return chai.expect(salesModel.getById(0)).to.eventually.be.rejected;
    });
    it('Não retorna nada caso a lista de produtos esteja vazia', () => {
      sinon.stub(connection, 'execute').resolves([[]]);
      return chai.expect(salesModel.getById(0)).to.eventually.deep.equal([]);
    });
    it('Retorna um objeto ao encontrar o item na lista', () => {
      sinon.stub(connection, 'execute').resolves([[{}]]);
      return chai.expect(salesModel.getById(0)).to.eventually.deep.equal([{}]);
    });
  });
});