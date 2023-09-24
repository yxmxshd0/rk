export function isValidData(req,res,next)
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

export function isValidName(req,res,next)
{
    let data = req.body;

    if (data.name===undefined||!data.name)
    {
        res.status(400).send("Невернные данные");
    }

    next();
}

export function IsValidContent (req,res,next)
{
    let data = req.headers;
    if (req.method!=="GET")
    {
        if (data['content-type']!=="application/json")
        {
            res.status(400).send("Требуется JSON")
        }
    }

    next();
}

export function BadUrl (req,res, next)
{
    res.status(400).send("Bad URL")
}
