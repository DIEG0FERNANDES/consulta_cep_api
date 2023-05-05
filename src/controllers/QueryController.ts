import { Request, Response } from 'express';
import { QueryDAO } from '../dao/QueryDAO'
import { QueryModel } from '../domains/QueryModel'

export class QueryController {

  private _queryDAO: QueryDAO;

  constructor() {
    this._queryDAO = new QueryDAO();
  }

  async save(req: Request, res: Response) {
    const { query: queryString, tipoCep } = req.body;
    if (!queryString || typeof queryString !== 'string' || !queryRegExp.test(queryString)) {
      return res.status(400).json({ mensagensDeErro: ['Número de CEP inválido'] });
    };
    if (!tipoCep || typeof tipoCep !== 'string') {
      return res.status(400).json({ mensagensDeErro: ['Tipocep inválido'] });
    };
    const queryExistingObject = await this._queryDAO.findByQuery(queryString);
    if (queryExistingObject) {
      return res.status(409).json({ mensagensDeErro: ['CEP já cadastrado'] });
    };
    const queryObject = new QueryModel({
      cep: queryString,
      tipoCep
    });
    await this._queryDAO.save(queryObject);
    res.status(201).json({ mensagem: 'CEP cadastrado com sucesso' });
  }

  async findByQuery(req: Request, res: Response) {
    const { Query: queryString } = req.params;

    if (!queryString || typeof queryString !== 'string' || !queryRegExp.test(queryString)) {
      return res.status(400).json({ mensagem: 'CEP inválido' });
    }

    const queryExistingObject = await this._queryDAO.findByQuery(queryString);

    if (!queryExistingObject) {
      return res.status(404).json({ mensagem: 'TipoCep não encontrado' });
    }

    res.json({ endereco: queryExistingObject });
  }

  async findByTipoCep(req: Request, res: Response) {
    const { tipoCep } = req.params;

    if (!tipoCep) {
      return res.status(400).json({ mensagem: 'CEP inválido' });
    }

    const queryExistingObject = await this._queryDAO.findByTipocep(tipoCep);

    if (!queryExistingObject) {
      return res.status(404).json({ mensagem: 'CEP não encontrado' });
    }

    res.json({ endereco: queryExistingObject });
  }
}

const queryRegExp = new RegExp(/^\d{5}\-\d{3}$/);
