import { Router } from 'express'
import { QueryController } from '../controllers/QueryController'

export const querysRouter = Router()
const queryCtrl = new QueryController()

querysRouter.post('/', (req, res) => queryCtrl.save(req, res));
querysRouter.get('/busca/cep/:cep', (req, res) => queryCtrl.findByCep(req, res));
querysRouter.get('/busca/tipoCep/:tipoCep', (req, res) => queryCtrl.findByLogradouro(req, res));
