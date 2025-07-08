import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaFacebook, FaTwitter,  FaGooglePlusG, FaPinterest, FaLinkedin } from "react-icons/fa";
 
function App() {
  const [count, setCount] = useState(0);

 return (
    <div className="min-h-screen bg-red-200 flex items-center justify-center px-4 ">
      <div className="max-w-6xl  rounded-4xl  p-6 grid md:grid-cols-2 gap-4 ">
        {/* Login Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold ">Login</h3>
          <input
            type="text"
            placeholder="Username or Email"
            className="w-70 h-8 rounded-4xl px-3 text-xs outline"
          /><br/>
          <input
            type="password"
            placeholder="Password"
            className="w-70 h-8 rounded-4xl px-3 text-xs outline"
          /><br/>
          <button className="w-20 h-9 bg-black text-white rounded-4xl text-xs font-semibold hover:bg-red-400">
            <a href="Login">LOGIN</a>
          </button><br/>
          <h2 className='font-serif'>You Can Also Login With...</h2>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-black hover:scale-110 transition text-2xl" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-black hover:scale-110 transition text-2xl" />
            </a>
            <a href="https://plus.google.com/" target="_blank" rel="noopener noreferrer">
              <FaGooglePlusG className="text-black hover:scale-110 transition text-2xl" />
            </a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
              <FaPinterest className="text-black hover:scale-110 transition text-2xl" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-black hover:scale-110 transition text-2xl" />
            </a>
          </div>
        </div>
        {/* Register Section */}
        <div className="space-y-4 relative max-w-full">
  <h3 className="text-2xl font-semibold ">Register</h3>
  <input
    type="text"
    placeholder="Your Name"
    className="w-full sm:w-50 h-8 rounded-4xl px-3  outline mx-2 text-xs"
  />         
 <input
    type="text"
    placeholder="User Name" className="w-full sm:w-50 h-8 rounded-4xl px-3 text-xs outline mx-2 "
  />
  <input
    type="email"
    placeholder="Email"
    className="w-full sm:w-50 h-8 rounded-4xl px-3 text-xs outline mx-2"
  />
  <input
    type="password"
    placeholder="password"
    className="w-full sm:w-50 h-8 rounded-4xl px-3 text-xs outline mx-2"
  />
  <input
    type="password"
    placeholder="Confirm Password"
    className="w-full sm:w-50 h-8 rounded-4xl px-3 text-xs outline mx-2"
  />
    <button className="w-21 h-9  bg-black text-white  rounded-4xl  text-xs font-semibold hover:bg-red-400 mx-2"><a href='#'>REGISTER</a>
    </button>
  </div>
</div>
</div>

  );
} 

export default App;
