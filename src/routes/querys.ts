import { Router } from 'express'
import { QueryController } from '../controllers/QueryController'

export const querysRouter = Router()
const queryCtrl = new QueryController()

querysRouter.post('/', (req, res) => queryCtrl.save(req, res));
querysRouter.get('/busca/query/:Query', (req, res) => queryCtrl.findByQuery(req, res));
querysRouter.get('/busca/tipoCep/:tipoCep', (req, res) => queryCtrl.findByTipoCep(req, res));
