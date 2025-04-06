import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import './App.css'
import { calculate } from './helper';

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [result, setResult] = useState(null);

  return (
    <div id='container'>
      <h1>Calculadora de IMC</h1>
      <TextField label="Peso" onChange={(e) => setWeight(e.target.value)} type='number' fullWidth></TextField> 
      <TextField label="Altura" onChange={(e) => setHeight(e.target.value)} type='number' fullWidth></TextField> 
      <Button onClick={() => setResult(calculate(weight, height))} variant="contained">Calcular</Button>
      {result != null && (<h2>{result}</h2>)}
    </div>
  )
}

export default App
