import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import './Technology.css'
const Technology = () => {
  const [Technology,setTechnology]=useState('');
    useEffect(()=>{
        fetch("http://localhost:5656/technology")
        .then(res=>res.json())
        .then((data)=>{console.log(data)
        setTechnology(data);
        })
        .catch((error)=>console.log(error))
    },[])
  return (
    <div>
        <h2 style={{textAlign:'center',marginTop:'20px'}}>Latest Technology Stories</h2>
          <hr style={{width:'5%',height:'2px',backgroundColor:'red'}}/>
      <div className='bollywoodContainer'>
        <div className='parent'>
        {Technology ? Technology.map((item,index)=>{
          return (
<Link style={{textDecoration:'none'}} className='link' to={`/Technology/${item.title}`} state={{item}}>
    <div className='tchild'>
  <div className='inner'>
  <center>
<div className='img'>
<img className='timg' src={item.img}  alt="404"></img>
</div>

</center>
<div className='text'>
<h4 className='title'>{item.title}</h4>
        <p className='description'>{item.description}</p>
        <p className='date'>Developer: {item.developer}</p>
</div>
  </div>
  
        
</div>
    </Link>
          )
          
        }):"Error"}
        </div>
    
    </div>
    </div>
  )
}

export default Technology