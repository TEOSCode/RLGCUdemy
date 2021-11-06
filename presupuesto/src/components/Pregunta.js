import React, {Fragment, useState} from 'react';

const Pregunta = () => {
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
  };
  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
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

export default Pregunta;
