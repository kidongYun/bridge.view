import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../configureStore'
import { SignAction } from './type'
import Sign from '../stores/sign'
import Response from '../stores/response'
import { signInAsyncAction } from './action'

export function signInThunk(signIn: { email: string, password: string }): ThunkAction<void, RootState, null, SignAction> {
    return async dispatch => {
        const { request, success, failure } = signInAsyncAction;
        dispatch(request());
        try {
            const sign = await call(signIn);
            console.log(sign);
            dispatch(success(sign));
        } catch (e) {
            dispatch(failure(e));
        }
    }
}

async function call(signIn: { email: string, password: string }) {
    const response = await axios.post("http://localhost:8080/sign/in", signIn);
    return response.data;
}