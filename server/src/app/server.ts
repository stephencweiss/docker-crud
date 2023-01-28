// TODO: Future -- try using an Apollo GraphQL server

import { Express } from 'express'
import { addUser, getUser, getUsers, removeUser } from '../controllers/users';
const bodyParser = require('body-parser')
const cors = require('cors')

export const server = (
  app: Express,
): Express => {

  // Middleware
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cors())

  // Routes
  app.get('/', (req: any, res: any) => {
    res.send('Hello kittens!\n');
  });

  app.route('/user')
    .get(getUsers)
    .post(addUser)

  app.route('/user/:id')
    .get(getUser)
    .delete(removeUser)

  return app;
};
