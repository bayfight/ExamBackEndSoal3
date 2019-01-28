const mongoose = require('mongoose');
const schema = mongoose.Schema;

const CPUSchema = new schema({
    namaCPU: String,
    tipe: String,
    platform: String,
    rilis: String,
    ramSisa: Number,
    ramTotal: Number
})

let dataCPU = mongoose.model('data', CPUSchema);

module.exports = dataCPU;