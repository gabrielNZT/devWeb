const getStyles = (req, res) => {
    const darkMode = req.appState.getDarkMode();
    const lightFilePath = (__dirname + '/css/styles.css').replace('controllers', '');
    const darkFilePath = (__dirname + '/css/dark.css').replace('controllers', '');
    try {
        return res.sendFile(darkMode ? darkFilePath : lightFilePath);
    } catch (err) {
        throw err;
    }
}

module.exports = { getStyles };