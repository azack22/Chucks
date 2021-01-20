import React, { useState } from 'react';
import useSound from 'use-sound';

import BooButton from './BooButton'
import LaughButton from './LaughButton';



function Sound(props) {
    


    return (
        <div>
            <BooButton/>
            <LaughButton/>
            
        </div>
    );
}

export default Sound;