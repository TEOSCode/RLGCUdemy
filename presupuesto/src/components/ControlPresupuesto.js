import React, {Fragment} from 'react';
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
export default Control;
