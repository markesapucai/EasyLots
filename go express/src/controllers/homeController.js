const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
  res.render('index');
}

exports.lotsRegister = (req, res) => {
  res.render('lotsRegister');
}



exports.contato = async(req, res) => {
  const contatos = await Contato.buscaContatos();
  res.render('index', { contatos });
};

