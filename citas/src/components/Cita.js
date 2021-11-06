import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => (
  <div className="cita">
    <p>
      <span>Mascota:</span> {cita.Mascota} &nbsp; <span>Dueño:</span>{' '}
      {cita.Dueño}
      <br />
      <span>Fecha:</span> {cita.Fecha}&nbsp;<span>Hora:</span> {cita.Hora}
      &nbsp;
      <span>Sintomas:</span> {cita.Sintomas}
    </p>
    <button
      className="u-full-width button eliminar"
      onClick={() => eliminarCita(cita.id)}
    >
      Eliminar Cita
    </button>
  </div>
);
Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};
export default Cita;
