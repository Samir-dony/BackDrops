import './App.css';
import bycicle from './assets/bycicle.svg';
import ocean from './assets/ocean.svg';
import background from './assets/background.svg';
import { useState } from 'react';

function App() {
  const [img, setImg] = useState(false);

  const [back, setBack] = useState(background);


  return (
    <div className='header'>
      <div className='container_1'>
        <div className='text' style={{color: back == ocean ? 'white' : 'black'}}>
          <h1>Thematic <br/> Backgrounds</h1>
          <p>Whimisial handcrafted <br /> backdrops in <br /> different styles</p>
        </div>

        <div className='images'>

        <div style={{cursor: 'pointer',backgroundImage: `url(${back})`, width: '80%',  display: 'flex', justifyContent: 'center', backgroundRepeat: 'no-repeat'}} onClick={() => setImg(!img)}>
          <img src={bycicle} alt="Error" width={600}/>
        </div>
        </div>

        {img ? <div className='modal'>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 5}}>
            <h1>Backdrops</h1>
            <p>Close</p>
            {/* <img style={{backgroundColor: 'black', cursor: 'pointer', width: 20}} src={closeButton} onClick={() => setImg(!img)} alt='Error'></img> */}
          </div>
          <div style={{display: 'flex', flexDirection: 'column', boxShadow: '0px 1px 4px 1px black'}}>
            <img src={background} style={{cursor: 'pointer', width: 400}} alt="Error!" onClick={() => setBack(background)}/>
            <img src={ocean} style={{cursor: 'pointer', width: 400}} alt="Error" onClick={() => setBack(ocean)} />
          </div>
        </div> : ''}
      </div>
    </div>
  )
}

export default App
