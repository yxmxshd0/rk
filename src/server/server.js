import express from "express"
import routerVar from "../routes/router.js";
import bodyParser from "body-parser";
import { BadUrl, IsValidContent } from "../midllewares/midlleware.js";
import morgan from "morgan";

const app = express();

app.use(IsValidContent)

app.use(bodyParser.json());

app.use(morgan("dev"))

app.use(routerVar);

app.use(BadUrl)


app.listen(5500, ()=>
{
    console.log("connection");
})