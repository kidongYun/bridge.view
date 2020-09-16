export default class SignType {
    status: boolean
    desc: string
    email: string

    constructor() {
        this.status = false;
        this.desc = '';
        this.email = '';
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

    build(): SignType {
        return this._sign;
    }
}