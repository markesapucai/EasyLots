const Lots = require('../models/lotsModel');

exports.registered = async (req, res) => {
    try {
        const lots = new Lots(req.body);
        await lots.dbCreate();

        await req.flash('success', 'Loteamento Registrado com sucesso! Prossiga com o cadastro dos lotes');
        await req.session.save(() => res.redirect('/lots/register'));

    } catch (error) {
        console.log(error);
        res.render('404');
    }
}