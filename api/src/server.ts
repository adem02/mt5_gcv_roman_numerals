import Express, {urlencoded} from "express";
import {json} from "body-parser";
import swaggerUi from 'swagger-ui-express';
import {RegisterRoutes} from "./frameworks/tsoa-routes/routes";

const PORT = 3008;
const app = Express();

app.use(urlencoded({
    extended: true
}));
app.use(json())

RegisterRoutes(app);

app.use(Express.static('public'));
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
);

app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT);
})