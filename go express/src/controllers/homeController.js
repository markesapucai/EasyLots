const Contato = require('../models/ContatoModel');
const Lots = require('../models/lotsModel');

exports.index = async (req, res) => {
  const ff = new Lots();
  const lots = await ff.searchLots();
  res.render('index', { lots });
}

exports.lotsRegister = (req, res) => {
  res.render('lotsRegister');
}



exports.contato = async (req, res) => {
  const contatos = await Contato.buscaContatos();
  res.render('index', { contatos });
};

