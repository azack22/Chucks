import './App.css';
import React, { useState } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Sound from './Components/Sound'
import Footer from './Components/Footer';

function App() {
  const [color, setColor] = useState('Black')
  return (
    <div className="App"
    style= {{backgroundColor:color}}
    
    >

      
      <div className='app-footer'>
        <Footer setColor= {setColor}/>

      </div>
      <div className= 'app-main'>
        <Main/>
        <Sound/>

      </div>
      <div className= 'app-header'>
        <Header/>

      </div>
      <div className= 'app-sound'>
       
      </div>


    
    </div>
  );
}

export default App;
