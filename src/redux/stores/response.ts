export default class Response<T> {
    errorCode?: number;
    errorDesc?: String;
    data?: T;
}