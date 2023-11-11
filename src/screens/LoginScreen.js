import React, { useState } from 'react';
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className='loginScreen-background'>
                <img className='loginScreen-logo' src='https://ottdock.com/images/OTTDock%20Logo1.png' alt='logo'></img>
                <button
                    onClick={() => setSignIn(true)}
                    className='loginScreen-button'>Sign In</button>
                <div className='loginScreen-gradient' />
            </div>
            <div className='loginScreen-body'>
                {signIn ? (
                    <SignUpScreen />
                ):(
                    <>
                    <h1>Welcome to Movie Streaming Catalogue.</h1>
                    <h2>Explore movies, webseries and more.</h2>
                    <h3>Enter you email to get started.</h3>
                    <div className='loginScreen-input'>
                        <form>
                            <input type="email" placeholder="Email Address" />
                            <button
                                onClick={() => setSignIn(true)}
                                className='loginScreen-getstarted'>GET STARTED</button>
                        </form>
                    </div>
                </>
                )}
                
            </div>
        </div>
    )
}

export default LoginScreen
