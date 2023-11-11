import React, { useRef } from 'react';
import "./SignUpScreen.css";
import { auth } from '../firebase';

function SignUpScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch(error => alert(error.message));
    };

    return (
        <div className='signUpScreen'>
            <h1>Sign In</h1>
            <form>
                <input ref={emailRef} placeholder='Email' type='email' />
                <input ref={passwordRef} placeholder='Password' type='password' />
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signUpScreen-gray'>New to Movie Streaming Catalogue?</span>
                    <span className='signUpScreen-link'onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen
