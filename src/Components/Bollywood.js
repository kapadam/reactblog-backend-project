import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import './Bollywood.css'
const Bollywood = () => {
    const [Bollywood,setBollywood]=useState('');
    useEffect(()=>{
        fetch("http://localhost:5656/bollywood")
        .then(res=>res.json())
        .then((data)=>{console.log(data)
        setBollywood(data);
        })
        .catch((error)=>console.log(error))
    },[])
  return (
    <div>
        
    <h2 style={{textAlign:'center',marginTop:'20px'}}>Latest Bollywood Stories</h2>
          <hr style={{width:'5%',height:'2px',backgroundColor:'red'}}/>
      <div className='bollywoodContainer'>
        <div className='parent'>
        {Bollywood ? Bollywood.map((item,index)=>{
            return (
                <Link style={{textDecoration:'none'}} key={index} className="link" to={`/Bollywood/${item.title}`} state={{item}}>
    <div className='child'>
  <div className='inner'>
  <center>
<div className='img'>
<img className='bimg' src={item.img}  alt="404"></img>
</div>

</center>
<div className='text'>
<h4 className='title'>{item.title}</h4>
        <p className='description'>{item.para}</p>
        <p className='date'>{item.year}</p>
</div>
  </div>
  
        
</div></Link>
            )
        }):"Error"
    }
        </div>
    
    </div>    
    </div>
  )
}

export default Bollywood