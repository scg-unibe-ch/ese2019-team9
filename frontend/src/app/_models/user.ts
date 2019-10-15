export class User {
    token?: string;
    email: string;

    setToken(token) {
        this.token = token;
    }
}