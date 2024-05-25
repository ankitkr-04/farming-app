import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {  UserCredential } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { FIREBASE_AUTH } from '@/utils/firebaseConfig';


const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleChangeEmail = (text: string) => {
        setEmail(text);
        setEmailError(null);
    };

    const handleChangePassword = (text: string) => {
        setPassword(text);
        setPasswordError(null);
    };

    const navigateToSignUp = () => {
        router.push('auth/signup'); 
    };

    const signIn = async () => {
        try {
            setIsLoading(true);
            const userCredential: UserCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
            const user = userCredential.user;
            console.log("User signed in:", user?.email);
        } catch (error: any) {
            console.error("Error signing in:", error);
            handleSignInError(error.code);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignInError = (errorCode: string) => {
        switch (errorCode) {
            case 'auth/user-not-found':
            case 'auth/invalid-email':
                setEmailError('Invalid email. Please check your email.');
                break;
            case 'auth/wrong-password':
                setPasswordError('Incorrect password. Please try again.');
                break;
            default:
                setEmailError('Failed to sign in. Please try again later.');
                break;
        }
      
    };

    const handleButtonClick = () => {
        if (!email) {
            setEmailError('Email is required.');
            return;
        }
        if (!password) {
            setPasswordError('Password is required.');
            return;
        }
        signIn();
    };

    return {
        email,
        password,
        emailError,
        passwordError,
        isLoading,
        handleChangeEmail,
        handleChangePassword,
        handleButtonClick,
        navigateToSignUp,
    };
};

export default useLogin;
