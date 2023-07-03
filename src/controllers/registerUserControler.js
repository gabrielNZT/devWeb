const apiService = require('../api/service');

const renderPage = async (req, res) => {
    const userData = req.appState?.getUserData();
    if (!userData.company) {
        return res.redirect('/login');
    }

    return res.render('registerUser', { ...userData, darkMode: req.appState.getDarkMode(), error: req.query.error || '' });
}

const getScript = (req, res) => {
    const filePath = (__dirname + '/scripts/registerUser.js').replace('controllers', '');
    return res.sendFile(filePath)
}

const submit = async (req, res) => {
    const { company } = req.appState?.getUserData();
    try {
        await apiService.register({ ...req.body, company });
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });

        return res.redirect('/users');
    } catch (err) {
        const error = encodeURIComponent('Falha ao salvar.');
        res.redirect(`/registerUser?error=${error}`);
    }
}

module.exports = { renderPage, getScript, submit };