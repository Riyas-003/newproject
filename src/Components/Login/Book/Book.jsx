import React,{useState} from 'react'
import './Book.css'

const Book = () => {
    const [Bid,setBid] =useState('');
    const [Bname,setBname] =useState('');
    const [Gen,setGen] =useState('');
    const [Price,setPrice] =useState('');
 
    const readBid = (event) =>{
        setBid(event.target.value);
        console.log(event.target.value)
    }
    const readBname = (event) =>{
        setBname(event.target.value);
        console.log(event.target.value)
    }
    const readGener = (event) =>{
        setGen(event.target.value);
        console.log(event.target.value)
    }
    const readprice= (event) =>{
        setPrice(event.target.value);
        console.log(event.target.value)
    }




  return (
    <div>
        <h1 className='book'>
          <u> Book-List</u>
         </h1>
         <form className='c'>
           Author: <input type="text" onChange={readBid} />
           <br />
           Book Name: <input type="text" onChange={readBname}  />
           <br /> 
           Gener: <input type="text" onChange={readGener}/>
           <br />
           Price: <input type="text" onChange={readprice} />
           <br />
           <button type='submit'>submit</button>
         </form>
       
    </div>
  )
}

export default Book
