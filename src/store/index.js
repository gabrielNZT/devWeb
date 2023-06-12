class AppState {
    constructor() {
        this.userTable = {
            search: '',
            page: 1,
            allElements: [],
            filteredElements: []
        }
        this.userData = {
            role: '',
            name: '',
            company: ''
        }
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

    setUserData(userData) {
        this.userData = userData;
    }
}

module.exports = AppState;