import { Router } from "express";
import { HandlerCreateTrip, HandlerAddPassToTrip, HandlerFindAllTrips } from "../handlers/trips.js";
import {isValidData, isValidName} from "../midllewares/midlleware.js";


const routerVar = Router();

routerVar.get("/trips", HandlerFindAllTrips);
routerVar.post("/trips", isValidData, HandlerCreateTrip);
routerVar.post("/trips/passengers", isValidName, HandlerAddPassToTrip);

export default routerVar;
