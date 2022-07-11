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
    it('Retorna um erro ao quando o produto não é encontrado', () => {
      sinon.stub(productsModel, 'getById').resolves('');
      return chai.expect(productsService.getById()).to.eventually.deep.rejectedWith(Error);
    });
    it('Retorna um objeto ao encontrar o item na lista', () => {
      sinon.stub(productsModel, 'getById').resolves([[{}]]);
      return chai.expect(productsService.getById()).to.eventually.deep.equal([[{}]]);
    });
  });

  describe('add', () => {
    beforeEach(sinon.restore);
    it('Dispara um erro ao não encontra o id solicitado', () => {
      sinon.stub(productsModel, 'add').rejects();
      return chai.expect(productsService.add(0)).to.eventually.be.rejected;
    });
    it('Retorna um erro ao quando parametro não é passado', () => {
      sinon.stub(productsModel, 'add').resolves();
      return chai.expect(productsService.add()).to.eventually.deep.rejectedWith(Error);;
    });
    it('Retorna um erro ao quando o parametro tem length menor que 5', () => {
      sinon.stub(productsModel, 'add').resolves('');
      return chai.expect(productsService.add('abc')).to.eventually.deep.rejectedWith(Error);
    });
    it('Retorna um objeto ao encontrar o item na lista', () => {
      sinon.stub(productsModel, 'add').resolves({});
      return chai.expect(productsService.add('produto')).to.eventually.deep.equal({});
    });
  });

  describe('edit', () => {
    beforeEach(sinon.restore);
    it('Dispara um erro ao não encontra o id solicitado', () => {
      sinon.stub(productsModel, 'edit').rejects();
      return chai.expect(productsService.edit()).to.eventually.be.rejectedWith(Error);
    });
    it('Retorna um erro ao quando parametro não é passado', () => {
      sinon.stub(productsModel, 'edit').resolves();
      return chai.expect(productsService.edit(0)).to.eventually.deep.rejectedWith(Error);
    });
    it('Retorna um erro ao quando o parametro tem length menor que 5', () => {
      sinon.stub(productsModel, 'edit').resolves('');
      return chai.expect(productsService.edit(0, 'abc')).to.eventually.deep.rejectedWith(Error);
    });
  });

  describe('remove', () => {
    beforeEach(sinon.restore);
    it('Dispara um erro ao não encontra o id solicitado', () => {
      sinon.stub(productsModel, 'remove').rejects();
      return chai.expect(productsService.remove(0)).to.eventually.be.rejectedWith(Error);
    });
    it('Retorna um erro ao quando parametro não é passado', () => {
      sinon.stub(productsModel, 'remove').resolves();
      return chai.expect(productsService.remove(0)).to.eventually.deep.rejectedWith(Error);
    });
    it('Retorna um erro ao quando o parametro tem length menor que 5', () => {
      sinon.stub(productsModel, 'getById').resolves({});
      sinon.stub(productsModel, 'remove').resolves('');
      return chai.expect(productsService.remove(0)).to.eventually.deep.deep.equal({});
    });
  });
});
