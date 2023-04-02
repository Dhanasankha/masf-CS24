import React from 'react';
import '../../App.css';
import '../SignUpSection/SignUpSection.css'
import { Button } from '../Button/Button';

function SignUpSection() {
  return (
    <div className='SignUp-container'>

    <video src='/videos/video2.mp4' autoPlay loop muted />

        <h1>Sign Up</h1>
      

        <div className='input-areas'>
            <form>
                <input
                className='SignUp-inputs'
                name='Name'
                type='name'
                placeholder='Your Name'
                />
            </form>

            <form>
                <input
                className='SignUp-inputs'
                name='Email'
                type='email'
                placeholder='Your Email'
                />
            </form>

            <form>
                <input
                className='SignUp-inputs'
                name='Password'
                type='password'
                placeholder='Your Password'
                />
            </form>

            <form>
                <input
                className='SignUp-inputs'
                name='Password'
                type='password'
                placeholder='Confirm Password'
                />
            </form>
            <Button buttonStyle='btn--outline'>SIGN UP</Button>
            </div>
        
    </div>
  );
}

export default SignUpSection;
