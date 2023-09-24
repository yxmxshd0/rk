import express from "express"
import routerVar from "../routes/router.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use(routerVar);

app.listen(5500, ()=>
{
    console.log("connection");
})