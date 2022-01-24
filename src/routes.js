import { Router } from "express";


import UsersController from "./controllers/AdminUsersController";

const routes = new Router()



//Rotas user
routes.get('/users', UsersController.index)
routes.get('/users/:id', UsersController.show)
routes.post('/users', UsersController.create)
routes.put('/users/:id', UsersController.update)
routes.delete('/users/:id', UsersController.delete)

export default routes
