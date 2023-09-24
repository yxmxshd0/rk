export default function isValidData(req,res,next)
{
    let data = req.body;

    if (data.destination===undefined||data.Date===undefined||data.spotNumber===undefined)
    {
        console.log(typeof(data.destination))
        res.status(400).send("Неверные данные")

    }
    else if (data.destination===""||data.Date===""||data.spotNumber===0)
    {

        res.status(400).send("Неверные данные")
    }

    next();
}