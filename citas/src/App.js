import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  //citas en local Storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  //arreglo de citas
  const [citas, agregarCitas] = useState(citasIniciales);

  //useEffect Para accionar cuando el estado cambia}
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  //Funcion que agregue la nueva cita
  const crearCita = cita => {
    agregarCitas([...citas, cita]);
  };

  //Funcion que eliminar una cita por ID
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    agregarCitas(nuevasCitas);
  };

  //mensaje default para no hay citas
  const HayCitas = citas.length === 0 ? 'No hay citas' : 'Citas pendientes';
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{HayCitas}</h2>
            {citas.map(cita => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
