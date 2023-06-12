const pt_BR = require('./pt_BR');

const handleMessages = (code) => {
    const message = pt_BR[code];
    return message || code;
}

module.exports = { handleMessages };