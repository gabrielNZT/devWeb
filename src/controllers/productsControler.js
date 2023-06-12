const renderPage = (req, res) => {
    const userData = req.appState?.getUserData();
    if (!userData.company) {
        return res.redirect('/login');
    }

    return res.render('listProducts', userData);
}

module.exports = { renderPage }