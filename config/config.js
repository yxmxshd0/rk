import {MongoClient} from "mongodb"


export default async function ConnectionToMongoDB(URL)
{
    try
    {
        const client = new MongoClient(URL)
        await client.connect();
        console.log("Stable conection to DB")

        return client;
    }
    catch(err)
    {
        console.log("Err con to DB")
        process.exit(1);
    }
}
