
const app = require("./src/index");

// const Connectdb = require("./src/configs/db")
const Connectdb = require("./src/configs/db");

app.listen(5000, () =>
{
    try
    {
        Connectdb();

        console.log("listening on port 5000");
    }
    catch(error)
    {
        console.log("error : ", error);
    }
});