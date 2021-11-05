import React, {Fragment, useState} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Producto from './components/producto';
import Carrito from './components/carrito';

function App() {
  const fecha = new Date().getFullYear();
  //crear listado de objetos
  const [productos, guardarProductos] = useState([
    {id: 1, nombre: 'Camisa React', precio: 50},
    {id: 2, nombre: 'Camisa Angular', precio: 30},
    {id: 3, nombre: 'Camisa Vue', precio: 80},
  ]);
  //State para e carrito de compras
  const [carrito, addProducts] = useState([]);

  return (
    <Fragment>
      <Header titulo="Tienda virtual" numero={20} />
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          addProducts={addProducts}
          productos={productos}
        />
      ))}
      <Carrito carrito={carrito} addProducts={addProducts} />
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
