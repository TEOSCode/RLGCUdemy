import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {revisarPresupuesto} from '../helpers';

const Control = ({presupesto, restante}) => {
  return (
    <Fragment>
      {restante <= 0 ? (
        <div className="alert alert-danger termino-presupuesto">
          Se terminó el prespuesto
          <br />
          Haz gastado $ {restante} de mas.
        </div>
      ) : (
        <div className={revisarPresupuesto(presupesto, restante)}>
          Restante: $ {restante}
        </div>
      )}
    </Fragment>
  );
};

Control.propTypes = {
  presupesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};

export default Control;
