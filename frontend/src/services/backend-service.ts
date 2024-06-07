class BackendService {

    constructor() {}

    login(body: { email: string; password: string; }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (body.email === 'heri@heri.co' && body.password === 'password') {
                    resolve({ token: 'fake-token' });
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 3000);
        });
    }

    getBooks() {
        throw new Error("Method not implemented.");
    }

    searchBooks(query: string) {
        throw new Error("Method not implemented.");
    }

    addBook(body: { title: string; author: string; }) {
        throw new Error("Method not implemented.");
    }

  // ...
}


export default new BackendService();