class AppStorage {
    private storage: Storage;
    constructor(storage: Storage) {
        this.storage = storage || window.localStorage;

        if (!this.isSupported()) {
            throw new Error('Storage is not supported by browser!');
        }
    }

    setItem(key: string, value: any) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    getItem(key: string) {
        return JSON.parse(this.storage.getItem(key) || '{}') || null;
    }

    removeItem(key: string) {
        this.storage.removeItem(key);
    }

    clear() {
        this.storage.clear();
    }

    getToken() {
        return this.getItem('token');
    }

    setUser(user: object) {
        return this.setItem('user', user);
    }

    getUser() {
        return this.getItem('user');
    }

    setToken(token = {}) {
        // TODO validate format of token
        this.setItem('token', token);
    }

    isSupported() {
        let supported = true;

        if (!this.storage) {
            supported = false;
        }

        return supported;
    }
}

const appLocalStorage = new AppStorage(window.localStorage);
const appSessionStorage = new AppStorage(window.sessionStorage);

export { appLocalStorage, appSessionStorage };
