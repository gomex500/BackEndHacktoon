import express from 'express';
import config from './config';
import cors from 'cors'

import dbRoutes from './routes/index.routes';

import swaggerJsDc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const app = express();

const DIRECTORIO_PERMITIDO_CORS = "http://localhost:3000";
app.use(cors({
  origin: DIRECTORIO_PERMITIDO_CORS
}));

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node api with sql server',
            version: '1.0.0'
        },
        servers:[
            {
                api: 'http://localhost:4000/'
            }
        ]
    },
    apis: ['./controllers/products.controller.js']
}

const swaggerSpace = swaggerJsDc(options);
app.use('/  ',swaggerUi.serve,swaggerUi.setup(swaggerSpace))

//settings
app.set('port', config.port || 4000);

//moddlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(dbRoutes);

export default app;