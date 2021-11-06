import React from 'react';

const Gasto = ({gasto}) => (
  <li className="gastos">
    <p>
      {gasto.nombreGasto}
      <span>$ {gasto.cantidad}</span>
    </p>
  </li>
);

export default Gasto;
