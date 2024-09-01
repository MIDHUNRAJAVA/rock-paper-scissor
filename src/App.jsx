import React from 'react';
import rock from './assets/rock.svg';
import paper from './assets/paper.svg';
import scissor from './assets/scissor.svg';

import './App.css';
import { useState } from 'react';


const App = () => {

const [me,setMe] = useState('');
const [bot,setBot] = useState('');
const [res,setRes]= useState('');
const [flag,setFlag]= useState(1);

const arr = ["ROCK","PAPER","SCISSOR"];
  function result(you)
  {
    const pc = Math.floor(Math.random()*3);

    setRes('');
    setMe(arr[you]);
    setBot(arr[pc]);
   
    
    if(pc===you) {setFlag(false);return;}
    

    
    if( (you===0 && pc===2) || (you===1 && pc===0) && (you===2 && pc===1))   
     {
        setRes('YOU');
        setFlag(true)
     }
     else
     {
      setRes('PC ');
      setFlag(true)
     } 
     
           
  }

  
  return (
    <>
    <div className='container'>

          <h1>ROCK-PAPER-SCISSORS</h1>

          <div className='option'>

            <img src={rock}  onClick={()=>result(0)} alt="Rock SVG" />
            <img src={paper} onClick={()=>result(1)} alt="paper SVG" />
            <img src={scissor} onClick={()=>result(2)} alt="scissor SVG" />

          </div>

          <div className='result'>
              
              <div className='you'>
                <h1>ME {me}</h1>
              </div>

              <div className='pc'>
                <h1>PC {bot}</h1>
              </div>

              <div className='final'>
                  { (flag) ?
                          (<h1> <span>{res} </span> WIN</h1>)                   
                          :
                          (<h1>TIED</h1>)
                  }
              </div>

          </div>

    </div>
    </>
  );
}

export default App;
