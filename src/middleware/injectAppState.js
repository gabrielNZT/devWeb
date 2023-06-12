const AppState = require("../store/index")

const appState = new AppState();

const injectAppState = (req, res, next) => {
    req.appState = appState;
    next();
}

module.exports = injectAppState;