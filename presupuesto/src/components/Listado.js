import React from 'react';
import PropTypes from 'prop-types';
import Gasto from './Gasto';

const Listado = ({gastos, presupesto, restante}) => {
  const Gastado = presupesto - restante;
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      <div className="alert alert-primary u-text-center">
        Presupuesto inicial: $ {presupesto}
      </div>
      {gastos.map(gasto => (
        <Gasto key={gasto.id} gasto={gasto} />
      ))}
      <li className="gastos">
        <p className="text-bold">
          Total Gastos
          <span className="gasto-total">$ {Gastado}</span>
        </p>
      </li>
    </div>
  );
};

Listado.propTypes = {
  gastos: PropTypes.array.isRequired,
  presupesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};

export default Listado;
