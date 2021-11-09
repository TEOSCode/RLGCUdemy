import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {
  //definir States
  const [nombreGasto, guardarNombre] = useState('');
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const agregarGasto = e => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad) || nombreGasto.trim() === '') {
      guardarError(true);
      return;
    }
    //Si se pasa la validacion
    guardarError(false);

    //construir el gasto
    const gasto = {
      nombreGasto,
      cantidad,
      id: shortid.generate(),
    };

    //pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);
    //reset del form
    guardarNombre('');
    guardarCantidad('');
  };
  return (
    <Fragment>
      <form onSubmit={agregarGasto}>
        <h2>Agrega tus gastos aqui:</h2>
        {error ? <Error mensaje="El gasto es incorrecto" /> : null}
        <div className="campo">
          <label>Descripcion gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. transporte"
            value={nombreGasto}
            onChange={e => guardarNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label>Cantidad gasto</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="Ej. 300"
            value={cantidad}
            onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
          />
        </div>
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar Gasto"
        />
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired,
};
export default Formulario;
