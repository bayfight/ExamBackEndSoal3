const express = require('express')
const app = express()
const routeCPU = require("./router/route")

app.use(routeCPU);

app.get("/", (req, res) => {
    res.send("server Aktif")
});

app.listen(3310, () => {
    console.log('server masuk 3310')
}
)