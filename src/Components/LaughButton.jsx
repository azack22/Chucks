import useSound from 'use-sound';

import Laugh from './Funny.mp3';

const LaughButton = () => {
  const [play] = useSound(Laugh);

  return <button id = 'LaughButton' onClick={play}>🤣</button>;
};


export default LaughButton; 