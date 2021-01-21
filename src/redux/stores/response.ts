export default class Response<T> {
    status: number | undefined
    body: T | string | undefined

    constructor() {
        this.status = undefined;
        this.body = "";
    }
}