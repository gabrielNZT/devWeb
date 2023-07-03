const loginService = require('../services/loginServices');
const messages = require('../i118/index');
const constants = require('../constants/index');
const apiService = require('../api/service');

const renderPage = (req, res) => {
    return res.render('login', { error: req.query.error || '' });
}

const submit = async (req, res) => {
    try {
        const nome = req.body.name;
        const password = req.body.password;
        const response = await apiService.login(req.body);

        req.appState.setUserData(response);

        switch (response.role) {
            case constants.ADMIN:
                return res.redirect('/users');
            case constants.RH:
                return res.redirect('/users');
            case constants.USER:
                return res.redirect('/products');
            default:
                return res.redirect('/login');
        }
    } catch (err) {
        const error = encodeURIComponent(messages.handleMessages('login_error'));
        res.redirect(`/login?error=${error}`);
    }
}

module.exports = { submit, renderPage };