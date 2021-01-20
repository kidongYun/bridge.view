export default class Sign {
    email?: string 
    token?: string
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

    token(token: string): SignBuilder {
        this._sign.token = token;
        return this;
    }

    build(): Sign {
        return this._sign;
    }
}