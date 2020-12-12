import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../configureStore'
import { SignAction } from './type'
import { signInAsyncAction, signUpAsyncAction } from './action'

export function signInThunk(param: { email: string, password: string }): ThunkAction<void, RootState, null, SignAction> {
    return async dispatch => {
        const { request, success, failure } = signInAsyncAction;
        dispatch(request({ email: param.email, password: param.password }));
        try {
            const response = await callSignIn(param);
            dispatch(success(response));
        } catch (e) {
            dispatch(failure(e));
        }
    }
}

export function signUpThunk(param: { email: string, password: string }): ThunkAction<void, RootState, null, SignAction> {
    return async dispatch => {
        const { request, success, failure } = signUpAsyncAction;
        dispatch(request());
        try {
            const response = await callSignUp(param);
            dispatch(success(response));
        } catch (e) {
            dispatch(failure(e));
        }
    }
}

async function callSignIn(param: { email: string, password: string }) {
    return await axios.post("http://localhost:8080/sign/in", param);
}

async function callSignUp(param: { email: string, password: string }) {
    return await axios.post("http://localhost:8080/sign/up", param);
}