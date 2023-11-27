const Lots = require('../models/lotsModel');

exports.registered = async (req, res) => {
    try {
        const lots = new Lots(req.body);
        await lots.dbCreate();

        await req.flash('success', 'Loteamento Registrado com sucesso! Prossiga com o cadastro dos lotes');
        await req.session.save(() => res.redirect(`/lots/register/${lots.lot._id}`));

    } catch (error) {
        console.log(error);
        res.render('404');
    }
}

exports.editIndex = async (req, res) => {
    if(!req.params.id) return res.render('404');

    const ff = new Lots();
    const lot = await ff.searchId(req.params.id);

    res.render('lotsRegister', { lot });
}

exports.edit = async (req, res) => {
    try {
        if(!req.params.id) return res.render('404');
    
        const lot = new Lots(req.body);
        await lot.edit(req.params.id);
        
        await req.flash('success', 'Loteamento editado com sucesso!');
        await req.session.save(() => res.redirect(`/lots/register/${lot.lot._id}`));
    } catch (error) {
        console.log(error);
        res.render('404');
    }
}