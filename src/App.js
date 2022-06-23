import React from 'react';
import './app.css';
import Navbar from './NavBar/Navbar.js';
import Home from './Home/Home.js';
import Popular from './Popular/Popular.js';
import AddNow from './AddNow/AddNow.js';
import Footer from './Footer/Footer.js';

function App(){
  return (
    <div>

   
    <Navbar/>
    
    {/* <div>App</div> */}
    <AddNow/>
    <Home/>
    <Popular/>
    
    <Footer/>
   


    </div>
  )
}

export default App;