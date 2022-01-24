import { Router } from "express";


import UsersController from "./controllers/UsersController";
import CountyController from "./controllers/CountyController";
import DistrictController from "./controllers/DistrictController";
import ReferenceController from "./controllers/ReferenceController"
import BlockController from "./controllers/BlockController"
import StreetController from "./controllers/StreetController"
import GroundController from "./controllers/GroundController";

const routes = new Router()



//Rotas user
routes.get('/users', UsersController.index)
routes.get('/users/:id', UsersController.show)
routes.post('/users', UsersController.create)
routes.put('/users/:id', UsersController.update)
routes.delete('/users/:id', UsersController.delete)

//Rotas County
routes.get('/users/:user_id/county', CountyController.index)
routes.get('/users/:user_id/county/:id', CountyController.show)
routes.post('/users/:user_id/county', CountyController.create)
routes.put('/users/:user_id/county/:id', CountyController.update)
routes.delete('/users/:user_id/county/:id', CountyController.delete)

//Rotas District
// routes.get('/users/:user_id/district', DistrictController.index)
// routes.get('/users/:user_id/district/:id', DistrictController.show)
routes.post('/users/:user_id/district', DistrictController.create)
// routes.put('/users/:user_id/district/:id', DistrictController.update)
// routes.delete('/users/:user_id/district/:id', DistrictController.delete)


//Rotas Reference
routes.post('/users/:user_id/reference', ReferenceController.create)

//Rotas Block
routes.post('/users/:user_id/block', BlockController.create)

//Rotas Street
routes.post('/users/:user_id/street', StreetController.create)

//Rotas Ground
routes.post('/users/:user_id/ground', GroundController.create)






export default routes
