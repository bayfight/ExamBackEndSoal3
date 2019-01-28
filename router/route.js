const router = require('express').Router();
const os = require('os');
const mongoose = require("mongoose")
const dataCPU = require('../modal/dataCPU');
let url = 'mongodb://localhost:27017/dataCPU';

mongoose.connect(url, { useNewUrlParser: true }, () => {
    console.log("MongoDB connected!");
});

router.post("/data", (req, res) => {
    new dataCPU({
        namaCPU: os.hostname(),
        tipe: os.type(),
        platform: os.platform(),
        ramSisa: os.freemem(),
        ramTotal: os.totalmem()
    }).save().then((x) => {
        console.log(x);
        console.log("Data CPU sudah masuk ke mongoDB!")
        res.send("Successfully posted!");
    })
})

router.get("/data", (req, res) => {
    dataCPU.find((err, data) => {
        if (err) {
            throw err;
        } else {
            console.log(data);
            res.send(data);
        }
    })
})

module.exports = router;