export default class Response<T> {
    errorCode?: number;
    errorDesc?: string;
    data?: T;
}