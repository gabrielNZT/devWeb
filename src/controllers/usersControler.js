const renderPage = (req, res) => {
    const page = req.query?.page || 1;
    const userData = req.appState?.getUserData();
    if (!userData.company) {
        return res.redirect('/login');
    }
    console.log(page)
    return res.render('listUser', { ...userData, page });
}

const getScript = (req, res) => {
    const filePath = (__dirname + '/scripts/listUsers.js').replace('controllers', '');
    return res.sendFile(filePath)
}

module.exports = { renderPage, getScript };