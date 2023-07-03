const { default: fetch } = require("node-fetch");
const { handleMessages } = require("../i118");


const BASE_URL = 'http://localhost:8080';


async function login({ name, password }) {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            password
        })
    };

    const response = await fetch(BASE_URL + '/owner/login', params);
    const data = await response.json();

    if (data.error) {
        throw new Error(handleMessages('login_error'));
    }

    return data;
}

async function register(userData) {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    };

    const response = await fetch(BASE_URL + '/owner/register', params);
    const data = await response.json();

    if (data.error) {
        throw new Error(handleMessages('login_error'));
    }

    return data;
}

async function getUsersByCompany(company) {
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'company': company
        }
    };

    const response = await fetch(BASE_URL + '/owner/users', params);
    const data = await response.json();

    if (data.error) {
        return [];
    }

    return data;
}

async function deleteUser(user) {
    const params = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'user': user
        }
    };

    const response = await fetch(BASE_URL + '/owner/user', params);
    const data = await response.json();

    if (data.error) {
        throw new Error('Erro ao deletar');
    }

    return data;
}

module.exports = { login, register, getUsersByCompany, deleteUser }