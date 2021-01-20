import logo from './logo.svg';
import './App.css';

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
