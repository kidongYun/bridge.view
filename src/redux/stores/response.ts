export default class Response<T> {
    loading: boolean
    error?: number;
    data?: T;

    constructor() {
        this.loading = false;
    }
}