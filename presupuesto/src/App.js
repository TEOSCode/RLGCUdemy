import React from 'react';
import Pregunta from './components/Pregunta';

function App() {
  return (
    <div className="container">
      <h1>Presupuesto</h1>
      <div className="contenido-principal contenido">
        <Pregunta />
      </div>
    </div>
  );
}

export default App;
