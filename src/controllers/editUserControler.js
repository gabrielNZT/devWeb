const apiService = require('../api/service');

const renderPage = async (req, res) => {
    const userData = req.appState?.getUserData();
    const userNameSelected = req.query.user;

    if (!userData.company) {
        return res.redirect('/login');
    }

    try {
        const selectedUser = await apiService.getUser(userNameSelected);
        return res.render('editUser', { ...userData, selectedUser, darkMode: req.appState.getDarkMode(), error: req.query.error || '' });
    } catch (err) {
        res.redirect('/users');
    }
}

const submit = async (req, res) => {
    const userToUpdate = req.query.user;

    try {
        await apiService.updateUser(userToUpdate, req.body);
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        return res.redirect('/users');
    } catch (err) {
        const error = encodeURIComponent('Falha ao salvar.');
        res.redirect(`/editUser?error=${error}&user=${userToUpdate}`);
    }

}

const getScript = (req, res) => {
    const filePath = (__dirname + '/scripts/editUser.js').replace('controllers', '');
    return res.sendFile(filePath)
}

module.exports = { renderPage, getScript, submit };