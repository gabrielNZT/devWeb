const messages = require('../i118/index');
const constants = require('../constants/index');
const fs = require('fs');

const validadeUser = (user) => {
    const filePath = (__dirname + `/users/${user?.name}.txt`).replace('services', '');

    if (!fs.existsSync(filePath)) {
        throw new Error(messages.handleMessages('login_error'));
    }

    const data = fs.readFileSync(filePath, 'utf8').split(',');
    const password = data[constants.PASSWORD_POSITION];
    const role = data[constants.ROLE_POSITION];
    const company = data[constants.COMPANY_POSITION];

    if (password !== user?.password) {
        throw new Error(messages.handleMessages('login_error'));
    }

    return { name: user.name, role, company };
}

module.exports = { validadeUser };