const mongoose = require('mongoose');

const LotsSchema = new mongoose.Schema({
    endereco: { type: String, required: true },
    complemento: { type: String, required: false},
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    cep: { type: String, required: true },
});

const LotsModel = mongoose.model('Lots', LotsSchema);

class Lots {
    constructor(body) {
        this.body = body;
        this.lot = null;
    }

    async dbCreate() {
        this.lot = await LotsModel.create(this.body);
    }

}

module.exports = Lots;