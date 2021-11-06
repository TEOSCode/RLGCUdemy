import React, {Fragment, useState} from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {
  //Crar el estado de las citas
  const [cita, actualizarCita] = useState({
    Mascota: '',
    Dueño: '',
    Fecha: '',
    Hora: '',
    Sintomas: '',
  });

  //State para el error
  const [error, handleError] = useState(false);

  //Funcion que obtiene los datos del formulario
  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores
  const {Mascota, Dueño, Fecha, Hora, Sintomas} = cita;

  //Cuando se envia el formulario
  const submitCita = e => {
    e.preventDefault();
    //Validar Form
    if (
      Mascota.trim() === '' ||
      Dueño.trim() === '' ||
      Fecha.trim() === '' ||
      Hora.trim() === '' ||
      Sintomas.trim() === ''
    ) {
      handleError(true);
      return;
    }
    //Eliminar mensaje de error
    handleError(false);
    //Asignar un ID
    cita.id = uuid();
    //Crear la cita
    crearCita(cita);
    //Reiniciar el form
    actualizarCita({
      Mascota: '',
      Dueño: '',
      Fecha: '',
      Hora: '',
      Sintomas: '',
    });
  };
  return (
    <Fragment>
      <h2>Crear cita:</h2>
      {error ? (
        <p className="alerta-error">Debes llenar todos los campos</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label htmlFor="Mascota">Mascota</label>
        <input
          type="text"
          name="Mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={Mascota}
        />
        <label htmlFor="Dueño">Dueño</label>
        <input
          type="text"
          name="Dueño"
          className="u-full-width"
          placeholder="Nombre Dueño"
          onChange={actualizarState}
          value={Dueño}
        />
        <label htmlFor="Fecha">Fecha</label>
        <input
          type="date"
          name="Fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={Fecha}
        />
        <label htmlFor="Hora">Hora</label>
        <input
          type="time"
          name="Hora"
          className="u-full-width"
          onChange={actualizarState}
          value={Hora}
        />
        <label type="text" htmlFor="sintomas">
          Sintomas
        </label>
        <textarea
          className="u-full-width"
          name="Sintomas"
          onChange={actualizarState}
          value={Sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Guardar cita
        </button>
      </form>
    </Fragment>
  );
};
Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default Formulario;
