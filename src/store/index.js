class AppState {
    constructor() {
        this.darkMode = false;
        this.userTable = {
            search: '',
            page: 1,
            allElements: [],
            filteredElements: []
        };
        this.userData = {
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

    getUserData() {
        return this.userData;
    }

    getDarkMode() {
        return this.darkMode;
    }

    setUserData(userData) {
        this.userData = userData;
    }

    changeDarkMode() {
        this.darkMode = !this.darkMode;
    }
}

module.exports = AppState;