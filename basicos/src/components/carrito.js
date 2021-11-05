import React from 'react';
import Producto from './producto';
import './carrito.css';

const Carrito = ({carrito, addProducts}) => (
  <div className="carrito">
    <h2>Carrito de compras</h2>
    {carrito.length === 0 ? (
      <p>Carrito vacio</p>
    ) : (
      carrito.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          addProducts={addProducts}
        />
      ))
    )}
  </div>
);

export default Carrito;
