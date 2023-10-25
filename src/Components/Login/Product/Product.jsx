import React, { useState } from 'react'
import './Product.css'

const Product = () => {
const [Pid,setPid] =useState('');
const [Pname,setPname] =useState('');
const [Cat,setCat] =useState('');
const [Price,setPrice] =useState('');

const readpid = (event) =>{
    setPid(event.target.value);
    console.log(event.target.value)
}
const readpname = (event) =>{
    setPname(event.target.value);
    console.log(event.target.value)
}
const readcategory = (event) =>{
    setCat(event.target.value);
    console.log(event.target.value)
}
const readprice = (event) =>{
    setPrice(event.target.value);
    console.log(event.target.value)
}




  return (
    
    <div>
       
      
    <h1 className='p'>
       <u> Product List</u>
      </h1>
      <form className='c'>
        Product Id: <input type="text" onChange={readpid} />
        <br />
        Product Name: <input type="text" onChange={readpname} />
        <br /> 
        Category: <input type="text" onChange={readcategory}/>
        <br />
        Price: <input type="text"  onChange={readprice}/>
        <br />
       <center> <button type='submit'>submit</button></center>
      </form>
    </div>
  )
}

export default Product
