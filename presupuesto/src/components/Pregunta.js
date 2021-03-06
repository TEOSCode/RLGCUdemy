import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPregunta,
}) => {
  //Definir el state
  const [cantidad, guradarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  //Funciopn Definir presupuesto
  const definirPresupuesto = e => {
    guradarCantidad(parseInt(e.target.value, 10));
  };
  //Submit para definir presupeusto
  const agregarPresupuesto = e => {
    e.preventDefault();
    //validar
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    //Si se pasa la validacion
    guardarError(false);

    //Guardar presupuesto
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };
  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Enviar presupuesto"
        />
      </form>
    </Fragment>
  );
};
Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired,
};
export default Pregunta;
