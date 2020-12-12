import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import { signInThunk, signUpThunk } from './thunk'

export default function useSign() {
    const selectSign = useSelector((state: RootState) => state.sign);

    const dispatch = useDispatch();
    const signIn = (param: { email: string, password: string }) => { dispatch(signInThunk(param)) }
    const signUp = (param: { email: string, password: string }) => { dispatch(signUpThunk(param)) }

    return {
        selectSign,
        signIn,
        signUp
    }
}