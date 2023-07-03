const apiService = require('../api/service');

const renderPage = async (req, res) => {
    const page = req.query?.page || 1;
    const user = req.query?.user || '';

    const userData = req.appState?.getUserData();
    if (!userData.company) {
        return res.redirect('/login');
    }

    if (user) {
        await apiService.deleteUser(user);
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });

        return res.redirect('/users');
    }

    const listUsers = await apiService.getUsersByCompany(userData.company).then();
    req.appState.setListUsers(listUsers);
    res.render('listUser', { ...userData, listUsers, page, darkMode: req.appState.getDarkMode() });
}

const getScript = (req, res) => {
    const filePath = (__dirname + '/scripts/listUsers.js').replace('controllers', '');
    return res.sendFile(filePath)
}

const changeDarkMode = (req, res) => {
    req.appState.changeDarkMode();
    return res.redirect('/users');
}

module.exports = { renderPage, getScript, changeDarkMode };