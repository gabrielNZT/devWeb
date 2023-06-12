const renderPage = (req, res) => {
    const userData = req.appState?.getUserData();
    if (!userData.company) {
        return res.redirect('/login');
    }

    return res.render('listProducts', { ...userData, darkMode: req.appState.getDarkMode() });
}

const getScript = (req, res) => {
    const filePath = (__dirname + '/scripts/listProducts.js').replace('controllers', '');
    return res.sendFile(filePath)
}

const changeDarkMode = (req, res) => {
    req.appState.changeDarkMode();
    return res.redirect('/products');
}

module.exports = { renderPage, getScript, changeDarkMode }