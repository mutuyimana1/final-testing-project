import React from 'react'
import "./home.css"
import logo from "../images/N-removebg-preview.png"
function Home() {
  return (
    <div className='home-content'>

      <div className='logo'>
        <img src={logo} alt='logo'/>

      </div>
     
    <h1>N-Garage for Vehicles </h1> 
    <div className='card'>
        <h3>choose way to use</h3> <hr/>
        <div className='radio'>
        <input type="radio" id="css" name="fav_language" value="CSS"/>
<label for="css">G-Map</label><br/> <br/>
<input type="radio" id="javascript" name="fav_language" value="JavaScript" />
<label for="javascript">Exact Lecation</label>
        </div>
       
       
        

      </div>
    </div>
  )
}

export default Home
