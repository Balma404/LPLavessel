import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tivoli from './components/shoppings/Tivoli/tivoli'
import Bandeiras from './components/shoppings/Bandeiras/bandeiras';
import Hortolandia from './components/shoppings/Hortolandia/hortolandia';
import Dom_Pedro from './components/shoppings/Dom_Pedro/don_pedro';
import Primavera from './components/primavera_lavessel/Primavera/primavera';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <Router>
        <Routes>
            <Route path="/" element={''} />
            <Route path="/VIPtivoli" element={<Tivoli />} />
            <Route path="/VIPbandeiras" element={<Bandeiras />} />
            <Route path="/VIPhortolandia" element={<Hortolandia />} />
            <Route path="/VIPdom_pedro" element={<Dom_Pedro />} />
            <Route path="/primavera" element={<Primavera />} />
            
        </Routes>''
    </Router>
    </>
);