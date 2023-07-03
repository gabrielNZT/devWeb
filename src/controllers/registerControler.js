const apiService = require('../api/service');

const renderPage = (req, res) => {
    return res.render('register', { error: req.query.error || '' });
}

const submit = async (req, res) => {
    try {
        await apiService.register({ ...req.body, role: 'ADMIN' });
        return res.redirect('/login');
    } catch (err) {
        const error = encodeURIComponent('Falha ao salvar.');
        res.redirect(`/register?error=${error}`);
    }
}

module.exports = { renderPage, submit };