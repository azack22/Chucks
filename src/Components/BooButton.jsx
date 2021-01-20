import useSound from 'use-sound';

import Booing from './booing.mp3';

const BooButton = () => {
  const [play] = useSound(Booing);

  return <button id= 'BooButton' onClick={play}>😞</button>;
};


export default BooButton; 