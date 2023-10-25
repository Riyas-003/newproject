import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {
const [Un,setUn] =useState('');
const [pwd,setPwd] =useState('');
const [error,setError] =useState(false);
const navigate=useNavigate();

const readusername = (event) =>{
    setUn(event.target.value);
    console.log(event.target.value)
}

const readpassword = (event) =>{
    setPwd(event.target.value);
    console.log(event.target.value)
}
 const readalldata = (event) =>{
    event.preventDefault();
    if(Un.trim ()==='' || pwd.trim ()==='' )
    {
        setError(true);
        return;
    }
    else{
        setError(false);
        navigate('/Home')
    }
 }


  return (
    <div>
      <h1 className='aa'><center><u>Sign-Up</u></center></h1>
      <form className='bb'>
        <center>
        Username:<input type='text' onChange={readusername} ></input>
        <br />
        Password:<input type='password' onChange={readpassword} ></input>
        <br />
        <button type='submit' onClick={readalldata}>Submit</button>
        </center>
        {Error && 'Error Occures'}
      </form>
    </div>
  )
}

export default Login


