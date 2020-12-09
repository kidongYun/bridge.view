import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import { signInThunk } from './thunk'

export default function useSign() {
    const selectSign = useSelector((state: RootState) => state.sign.response);

    const dispatch = useDispatch();
    const signIn = (signIn: { email: string, password: string }) => { dispatch(signInThunk(signIn)) }

    return {
        selectSign,
        signIn
    }
}