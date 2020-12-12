export default class Sign {
    email: string
    password: string

    constructor() {
        this.email = '';
        this.password = '';
    }
}

export class SignBuilder {
    private readonly _sign: Sign;

    constructor() {
        this._sign = new Sign();
    }

    email(email: string): SignBuilder {
        this._sign.email = email;
        return this;
    }

    password(password: string): SignBuilder {
        this._sign.password = password;
        return this;
    }

    build(): Sign {
        return this._sign;
    }
}