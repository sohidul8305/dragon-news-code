import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userid from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    const handleLogOut= ()=>{
        console.log('button Clicked');
        logOut()
.then(() => {
  alert("You Logged Out successfully");
})
.catch((error) => {
  console.log(error);
});
    }
    return (
        <div className='flex justify-between items-center'>
          <div className=''>{user && user.email}</div>
          <div className='nav flex gap-5 text-accent'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
          </div>
          <div className='login-btn flex gap-5'>
          <img src={userid} alt="" />
          {
            user ? (<button onClick={handleLogOut}  className='btn btn-primary px-10'>LogOut</button>) : (  <Link to="/auth/login"><button className='btn btn-primary px-10'>Login</button></Link>)
          }
   
           </div>
        </div>
    );
};

export default Navbar;