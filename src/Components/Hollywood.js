import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import './Hollywood.css'
const Hollywood = () => {
    const [Data,setData]=useState('');
    useEffect(()=>{
        fetch("http://localhost:5656/hollywood")
        .then(res=>res.json())
        .then(data=>{console.log(data)
         setData(data);   
        })
        .catch((error)=>console.log(error));
    },[])
  return (
    <div>
        <h2 style={{textAlign:'center',marginTop:'20px'}}>Latest Hollywood Stories</h2>
          <hr style={{width:'5%',height:'2px',backgroundColor:'red'}}/>
      <div className='bollywoodContainer'>
      
          <div className='hcontainer'>
            <div className='holly-left'>
            {Data ? Data.map((item,index)=>{
            return (
                <Link style={{textDecoration:'none'}} className='link' to={`/Hollywood/${item.title}`} state={{item}}>
    <div className='child1'>
        <div className='img-left'>
        <img className='himg' src={item.img}  alt="404"></img>
        </div>
      <div className='htext'>
      <h4 className='title'>{item.title}</h4>
        <p className='description'>{item.description}</p>
        <p className='date'>{item.date}</p>
      </div>
      
      </div>
    </Link>
            )
        }):"Error"
        }
            </div>
            <div className='holly-right'>
 advertisement
</div>
          </div>
        
        </div>
        Hollywood</div>
  )
}

export default Hollywood