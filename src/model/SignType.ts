export default class SignType {
    status: boolean
    desc: string
    email: string
    password: string

    constructor() {
        this.status = false;
        this.desc = '';
        this.email = '';
        this.password = '';
    }
}

export class SignBuilder {
    private readonly _sign: SignType;

    constructor() {
        this._sign = new SignType();
    }

    status(status: boolean): SignBuilder {
        this._sign.status = status;
        return this;
    }

    desc(desc: string): SignBuilder {
        this._sign.desc = desc;
        return this;
    }

    email(email: string): SignBuilder {
        this._sign.email = email;
        return this;
    }

    password(password: string): SignBuilder {
        this._sign.password = password;
        return this;
    }

    build(): SignType {
        return this._sign;
    }
}