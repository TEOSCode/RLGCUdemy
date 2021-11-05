import React from 'react';

const Producto = ({producto, carrito, addProducts, productos}) => {
  const {nombre, precio, id} = producto;
  //agregtar producto al carrito
  const SelecionarProducto = id => {
    const producto = productos.filter(producto => producto.id === id)[0];
    addProducts([...carrito, producto]);
  };
  const EliminarProducto = id => {
    const productos = carrito.filter(producto => producto.id !== id);
    addProducts(productos);
  };
  return (
    <div>
      <h2>{nombre}</h2>
      <p>$ {precio}</p>

      {productos ? (
        <button type="button" onClick={() => SelecionarProducto(id)}>
          Al Carrito
        </button>
      ) : (
        <button type="button" onClick={() => EliminarProducto(id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};

export default Producto;
