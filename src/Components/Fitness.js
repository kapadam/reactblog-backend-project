import React,{useEffect,useState} from 'react'

import './Fitness.css'
import { Link } from 'react-router-dom';
const Fitness = () => {
  const [Fitness,setFitness]=useState('');
    useEffect(()=>{
        fetch("http://localhost:5656/fitness")
        .then(res=>res.json())
        .then(data=>{console.log(data)
        setFitness(data)
        })
    })
  return (
    <div>
        
        <h2 style={{textAlign:'center',marginTop:'20px'}}>Latest Fitness Stories</h2>
          <hr style={{width:'5%',height:'2px',backgroundColor:'red'}}/>
      <div className='bollywoodContainer'>
        <div className='parent'>
          {Fitness ? Fitness.map((item,index)=>{
            return (
              <Link style={{textDecoration:'none'}} className='link' to={`/Fitness/${item.title}`} state={{item}}>
    <div className='fchild'>
  <div className='finner'>
  <center>
<div className='img'>
<img className='fimg' src={item.img}  alt="404"></img>
</div>

</center>
<div className='ftext'>
<h4 className='ftitle'>{item.title}</h4>
        <p className='fdescription'>{item.para}</p>
</div>
  </div>
  
        
</div>
    </Link>
            )
          }):"Error"}
        </div>
    
    </div></div>
  )
}

export default Fitness