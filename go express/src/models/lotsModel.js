const mongoose = require('mongoose');

const LotsSchema = new mongoose.Schema({
    endereco: { type: String, required: true },
    complemento: { type: String, required: false },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    cep: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now },
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

    async searchLots() {
        const lots = await LotsModel.find()
            .sort({ criadoEm: -1 });
        return lots;
    }

    async searchId(id) {
        if (typeof id !== 'string') return;
        const lot = await LotsModel.findById(id)
        return lot;
    }

    async edit(id) {
        if (typeof id !== 'string') return;
        
        this.lot = await LotsModel.findByIdAndUpdate(id, this.body, { new: true });
    }

    
}

module.exports = Lots;