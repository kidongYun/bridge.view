export default class Response<T> {
    status?: number
    body?: T | string

    constructor() {
        this.status = undefined;
        this.body = "";
    }
}