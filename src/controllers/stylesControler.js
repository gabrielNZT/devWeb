const getStyles = (req, res) => {
    try {
        return res.sendFile((__dirname + '/css/styles.css').replace('controllers', ''));
    } catch (err) {
        throw err;
    }
}

module.exports = { getStyles };