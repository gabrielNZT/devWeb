const logout = (req, res) => {
    req.appState?.logout();
    return res.redirect('/login');
}

module.exports = { logout };