import { session } from "../services/session.js";
import {CreateTrip, findAllTrips, findTrip, updatePass } from "../services/trips.js"
import { ObjectId } from "mongodb";

export async function HandlerCreateTrip(req,res,next)
{
    try
    {
        let data = req.body;
        
        data.passengers = [];
        await CreateTrip(session, data);
        res.status(200).send("Записано");
    }

    catch(err)
    {
        next(err)
    }
}


export async function HandlerFindAllTrips(req, res, next)
{
    try
    {
        
        res.status(200).send(await findAllTrips(session))
    }
    catch(err)
    {
        next(err);
    }
}

export async function HandlerAddPassToTrip(req,res,next)
{
    try
    {
        let data = req.body;
        if (ObjectId.isValid(data.id))
        {
            let obj  = await findTrip(session,data.id)

            if (obj!=null)
            {
                if (obj.spotNumber>=1)
                {
                    let oper = await updatePass(session,data.id,data.name);
                    if (oper!=null)
                    {
                        res.json(oper);
                    }
                }
                else
                {
                    res.status(200).send("Не хватает мест")
                }
            }
            else
            {
                res.status(400).send("Не найдено путешествие") 
            }
        }
        else 
        {
            res.status(400).send("Неверный ID")
        }
    }

    catch(err)
    {
        next(err)
    }
}

