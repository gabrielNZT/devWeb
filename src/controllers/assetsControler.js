const getBackground = async (req, res) => {
    try {
        return res.sendFile(((__dirname + '/assets/background')).replace('controller', ''));
    } catch (err) {
        throw err;
    }
}

module.exports = { getBackground };