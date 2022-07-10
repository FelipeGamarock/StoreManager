const chai = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const productsModel = require('../../../models/productsModel');

const productsMock = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
]

describe('models/productsModel', () => {
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
});
