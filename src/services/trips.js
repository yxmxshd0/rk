import { ObjectId } from "mongodb";

export  async function CreateTrip(session, trip)
{
    return await session.db("firstDB").collection("trips").insertOne(trip)
}

export async function findTrip(session, id)
{
    let obj = await session.db("firstDB").collection("trips").findOne({_id: new ObjectId(id)})
    if (obj)
    {
        return await session.db("firstDB").collection("trips").findOne({_id: new ObjectId(id)})
    }
    else
    {
        return null;
    }
       
}



export async function updatePass(session, id, passengers)
{
    let obj = await session.db("firstDB").collection("trips").findOne({_id: new ObjectId(id)})
    if (obj)
    {
        return await session.db("firstDB").collection("trips").updateOne({_id: new ObjectId(id)}, {$push :{ passengers: passengers}, $inc: {spotNumber: -1} })
    }
    else
    {
        return null;
    }
       
}

export async function findAllTrips(session)
{
    return await session.db("firstDB").collection("trips").find().toArray();
}
