import 'reflect-metadata';
import { container } from '../ioc/app.container';
import * as serverless from 'serverless-http';
import * as express from 'express';
import { TYPES } from '../ioc/types';
import { GetPeopleService } from '../user/application/services/get.people.service';
import { CreatePeopleService } from '../user/application/services/create.people.service';
import * as bodyParser from 'body-parser';
import * as swaggerUi from 'swagger-ui-express';
let swaggerDocument = require('./doc/swagger.json');
const app = express();

let getPeopleService = container.get<GetPeopleService>(TYPES.Services.GetPeopleService);
let createPeopleService = container.get<CreatePeopleService>(TYPES.Services.CreatePeopleService);

app.get('/people/:id', async function (req, res) {
  const id = req.params.id;
  const response = await getPeopleService
    .execute(id)
    .catch(e => (console.log(e)));
    res.json(response)
});

app.post('/people', bodyParser.json(), async function (req, res) {
    const response = await createPeopleService
    .execute(req.body)
    .catch(e => (console.log(e)));
    res.json(response)
})

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports.handler = serverless(app);

const http = require('http');
let nodeapp = http.createServer(app);
nodeapp.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');