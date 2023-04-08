import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Bollywoodnav from './Components/Bollywoodnav';
import Hollywoodnav from './Components/Hollywoodnav';
import Fitnessnav from './Components/Fitnessnav';
import Foodnav from './Components/Foodnav';
import Technologynav from './Components/Technologynav';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import FoodFullView from './Components/FoodFullView';
import FitnessFullView from './Components/FitnessFullView';
import BollywoodFullView from './Components/BollywoodFullView';
import HollywoodFullView from './Components/HollywoodFullView';
import TechnologyFullView from './Components/TechnologyFullView';
import PageNotFound from './Components/PageNotFound';
import './App.css';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/bollywood" element={<Bollywoodnav/>}/>
        <Route path="/hollywood" element={<Hollywoodnav/>}/>
        <Route path="/Fitness" element={<Fitnessnav/>}/>
        <Route path="/Food" element={<Foodnav/>}/>
        <Route path="/Technology" element={<Technologynav/>}/>
        <Route path="/Food/:name" element={<FoodFullView/>}/>
      <Route path="/Technology/:name" element={<TechnologyFullView/>}></Route>
      <Route path='/Fitness/:name' element={<FitnessFullView/>}></Route>
      <Route path="/Bollywood/:name" element={<BollywoodFullView/>}></Route>
      <Route path='/Hollywood/:name' element={<HollywoodFullView/>}></Route>
      <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default App