class AppState {
    constructor() {
        this.darkMode = false;
        this.listUsers = [];
        this.userTable = {
            search: '',
            page: 1,
            allElements: [],
            filteredElements: []
        };
        this.userData = {
            token: '',
            role: '',
            name: '',
            company: ''
        };
    }

    logout() {
        this.userData = {
            role: '',
            name: '',
            company: ''
        };
    }

    getListUsers() {
        return this.listUsers;
    }

    getUserData() {
        return this.userData;
    }

    getDarkMode() {
        return this.darkMode;
    }

    setUserData(userData) {
        this.userData = userData;
    }

    setListUsers(listUsers) {
        this.listUsers = listUsers;
    }

    changeDarkMode() {
        this.darkMode = !this.darkMode;
    }
}

module.exports = AppState;