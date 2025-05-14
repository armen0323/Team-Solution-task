import {useAppDispatch} from "@hooks/useRedux";
import {useState} from "react";
import {emailRegexp} from "@utils/constant";
import {loginThunk} from "@redux/reducers/auth/auth.thunk";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";

type SignUpForm = {
    email?: string;
    password?: string
}

const useSignIn = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [form, setForm] = useState<SignUpForm>({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<SignUpForm>({});

    const validate = () => {
        const newErrors: SignUpForm = {};

        if (!form?.email?.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegexp.test(form.email.trim())) {
            newErrors.email = 'Invalid email format';
        }

        if (!form?.password?.trim()) {
            newErrors.password = 'Password is required';
        }
        return newErrors;
    };

    const handleSignIn = async () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            const loginResult = await dispatch(loginThunk(form as Required<SignUpForm>)).unwrap();
            if (loginResult.token) {
                Cookies.set('access_token', loginResult.token, {
                    expires: 7,
                    path: '/',
                    secure: true,
                    sameSite: 'Strict',
                });
                navigate('/home');
            }
        } catch (err: unknown) {
            const error = err as { error: string };
            toast.error(error.error);
        }

    };


    const handleChange = (field: keyof SignUpForm, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));

        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };
    return {handleSignIn,errors,handleChange,form}
}

export default useSignIn;