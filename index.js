const express = require('express')
const app = express();

require('./db/connection')

app.get("/", async (req, res) => {
    try {
        res.send("the server is started");
    }
    catch (e) {
        console.log(e);
    }
})
app.listen(8000);