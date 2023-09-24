import { Router } from "express";
import { HandlerCreateTrip, HandlerAddPassToTrip, HandlerFindAllTrips } from "../handlers/trips.js";
import isValidData from "../midllewares/midlleware.js";


const routerVar = Router();

routerVar.get("/", HandlerFindAllTrips);
routerVar.post("/trips", isValidData, HandlerCreateTrip);
routerVar.post("/trips/passengers", HandlerAddPassToTrip);

export default routerVar;
