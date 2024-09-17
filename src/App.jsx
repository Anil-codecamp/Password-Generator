import React, { useState } from 'react'
import './App.css'
import { LC, NC, SC, UC } from './PassChar'


const App = () => {
  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowercase] = useState(false)
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passwordLen,setPasslen] =useState(10)
  const [fpass,setFinalPass]=useState()
 





  const createPassword = () => {
    let finalpass=''
    let charSet = ''
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) charSet +=UC;
      if(lowercase) charSet+=LC;
      if(number) charSet+=NC;
      if(symbols) charSet+=SC;
      
      for(let i=0;i<passwordLen;i++){
        finalpass+=charSet.charAt (Math.floor(Math.random()*charSet.length))
      }
      setFinalPass(finalpass)
      

      
       


    }
    else {
      alert("hello")
    }

  }

  const copy=()=>{
    navigator.clipboard.writeText(fpass)
    if(copy){
      alert("successful copied")
    }
    else{
      alert("not copied")
    }
  }

  return (
    <div>

      <div className='passwordBox'>
        <h2>Password Generator</h2>
        <div className='readtext'>
          <input type="text" value={fpass} readOnly />
          <button onClick={copy}>copy</button>
        </div>

        <div className='passLength'>
          <label htmlFor="">Password Length</label>
          <input type="number" min={8} max={20} value={passwordLen} onChange={(e)=>setPasslen(e.target.value)} />
        </div>

        <div className='passLength'>
          <label htmlFor="">Include UpperCase letter</label>
          <input type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)} />
        </div>

        <div className='passLength'>
          <label htmlFor="">Include Lower Case letters</label>
          <input type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)} />
        </div>

        <div className='passLength'>
          <label htmlFor="">Include Numbers</label>
          <input type="checkbox" checked={number} onChange={() => setNumber(!number)} />
        </div>

        <div className='passLength'>
          <label htmlFor="">Include symbols</label>
          <input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} />
        </div>

        <div className='btn'>
          <button onClick={createPassword}>Generate Password</button>

        </div>


      </div>
    </div>
  )
}

export default App
