import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            <div className='space-y-3'>
                <button className='btn btn-secondary btn-outline w-full'><FaGoogle />Login With Google</button>
                <button className='btn btn-primary btn-outline w-full'><FaGithub />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;