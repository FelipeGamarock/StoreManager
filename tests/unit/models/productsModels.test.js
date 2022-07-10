const chai = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const productsModel = require('../../../models/productsModel');

describe('models/productsModel', () => {
  
  describe('getAll', () => {
    beforeEach(sinon.restore);
    it('Dispara um erro ao não encontra o id solicitado', () => {
      sinon.stub(connection, 'execute').rejects();
      return chai.expect(productsModel.getAll(0)).to.eventually.be.rejected;
    });
    it('Não retorna nada caso a lista de produtos esteja vazia', () => {
      sinon.stub(connection, 'execute').resolves([[]]);
      return chai.expect(productsModel.getAll(0)).to.eventually.be.undefined;
    });
    it('Retorna um objeto ao encontrar o item na lista', () => {
      sinon.stub(connection, 'execute').resolves([[{}]]);
      return chai.expect(productsModel.getAll(0)).to.eventually.deep.equal({});
    });
  })
  
  describe('getById', () => {
    beforeEach(sinon.restore);
    it('Dispara um erro ao não encontra o id solicitado', () => {
      sinon.stub(connection, 'execute').rejects();
      return chai.expect(productsModel.getById(0)).to.eventually.be.rejected;
    });
    it('Não retorna nada caso a lista de produtos esteja vazia', () => {
      sinon.stub(connection, 'execute').resolves([[]]);
      return chai.expect(productsModel.getById(0)).to.eventually.be.undefined;
    });
    it('Retorna um objeto ao encontrar o item na lista', () => {
      sinon.stub(connection, 'execute').resolves([[{}]]);
      return chai.expect(productsModel.getById(0)).to.eventually.deep.equal({});
    });
  });

  describe('remove', () => {
    beforeEach(sinon.restore);
    it('Dispara um erro ao não encontra o id solicitado', () => {
      sinon.stub(connection, 'execute').rejects();
      return chai.expect(productsModel.remove(1)).to.eventually.be.rejected;
    });
    it('Não retorna nada caso a remoção seja feita com sucesso', () => {
      sinon.stub(connection, 'execute').resolves();
      return chai.expect(productsModel.remove(1)).to.eventually.be.undefined;
    });
  });

});
