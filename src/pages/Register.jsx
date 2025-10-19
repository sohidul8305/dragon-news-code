import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser } = use(AuthContext);
    const handleRegister= (event) => {
 event.preventDefault();
console.log(event.target);
const form = event.target;
const name = form.name.value;
const photo = form.photo.value;
const email = form.email.value;
const password = form.password.value;
 console.log(name,photo, email, password);
 createUser(email,password)
 .then((result) => {
    const user = result.user;
    // console.log(user);
    setUser(user)
 })
 .catch((error) =>{
    const erroeCode = error.code;
    const errorMessage = error.Message;
    alert(errorMessage);
 })

    }
    return (
          <div className='flex justify-center min-h-screen items-center'>
  <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
    <h2 className='font-semibold text-2xl text-center'>Register Your Account</h2>

 <form onSubmit={handleRegister} className='card-body'>
           <fieldset className="fieldset">
           {/* Name */}
          <label className="label">Your Name</label>
          <input type="text" name="name" className="input" placeholder="Inter Your Name" />
          {/* photo URL */}
          <label className="label">Photo URL</label>
          <input type="text" name="photo" className="input" placeholder="Inter Photo URL" />
          {/* Email */}
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder=" Inter Your Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder=" Inter Your Password" />
          <button type="submit" className="btn btn-neutral mt-4">Register</button>
              <p className='font-semibold text-center pt-5'>Already Have An Account ?{""} <Link className='text-secondary underline' to='/auth/login'>Login</Link></p>
        </fieldset>
 </form>
      </div>
    </div>

    );
};

export default Register;