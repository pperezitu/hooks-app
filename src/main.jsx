import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './01-useState/CounterApp';
// import { HooksApp } from './HooksApp';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

let dataVariable = 'demo';

const funcion = () => {
	console.log(numeros);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp />
    {/* <HooksApp /> */}
  </React.StrictMode>
)
