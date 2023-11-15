import Express, {urlencoded} from "express";
import {json} from "body-parser";
import swaggerUi from 'swagger-ui-express';
import {RegisterRoutes} from "./frameworks/tsoa-routes/routes";
import cors from "cors";
import {errorHandler} from "./middlewares/errors-handler.middleware";

const PORT = 3008;
const app = Express();

app.use(urlencoded({
    extended: true
}));
app.use(cors())
app.use(json())

RegisterRoutes(app);

app.use(Express.static('public'));
app.use(
    "/",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
);

app.use(errorHandler);

export default app;