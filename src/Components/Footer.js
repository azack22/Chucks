import React from 'react';

function Footer({setColor}) {
    return (
        <div>
          
          <label htmlFor= 'color'></label> 
          <input type='color'
          id='color'
          
          onChange={(event)=>{
            setColor(event.target.value)
            
            

          }}/>
          
        </div>
    );
}

export default Footer;