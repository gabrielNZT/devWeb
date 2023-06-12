const renderPage = (req, res) => {
    const page = req.query?.page || 1;
    const userData = req.appState?.getUserData();
    if (!userData.company) {
        return res.redirect('/login');
    }
    console.log(page)
    res.render('listUser', { ...userData, page, darkMode: req.appState.getDarkMode() });
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