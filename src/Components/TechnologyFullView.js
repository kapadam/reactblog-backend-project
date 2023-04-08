import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import './Technology.css';
const TechnologyFullView = () => {
  const data = useLocation().state.item;
  return (
      <>
      <Navbar/>
      <div className='full-view'>
          <center>
          <span className='title-full-view'>{data.title}</span><br/>

<img src={ data.img} alt="empty" className='food-full-view-img'/>

<p className='full-view-para'>{data.description}</p>
<p>{data.developer}</p>
          </center>
          
      </div>
      </>
  )
}

export default TechnologyFullView