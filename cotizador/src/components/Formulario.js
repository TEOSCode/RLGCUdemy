import {useState} from 'react';
import styled from '@emotion/styled';
import {obtenerDiferenciaYear, calcularMarca} from '../helper';

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const Radio = styled.input`
  margin: 0 5px;
`;

const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 12px;

  &:hover {
    background-color: #26c6da;
  }
`;
const Error = styled.div`
  background-color: red;
  color: white;
  padding: 16px;
  width: 100%;
  text-align: center;
  margin-bottom: 25px;
`;
const Formulario = () => {
  const [datos, guardarDatos] = useState({
    marca: '',
    year: '',
    plan: 'basico',
  });
  const [error, guardarError] = useState(false);

  //extraer valores del state
  const {marca, year, plan} = datos;

  //Leer los datos del formulario y colocarlos en el state
  const obtenerDatos = e => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = e => {
    e.preventDefault();
    if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
      guardarError(true);
      return;
    }
    guardarError(false);
    //base de 2000
    let resultado = 2000;

    //obtener la diferencia de años
    const diferencia = obtenerDiferenciaYear(year);
    //por cada año hay que restar el 3%
    resultado -= (diferencia * 3 * resultado) / 100;

    //Americano 15%
    //Asiatico 5%
    //Europeo 30%
    resultado = calcularMarca(marca) * resultado;

    //Basico 20%
    //Completo50%

    //Total
  };
  return (
    <form onSubmit={cotizarSeguro}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Campo>
        <Label htmlFor="marca">Marca: </Label>
        <Select name="marca" id="marca" value={marca} onChange={obtenerDatos}>
          <option value="">--Seleccione--</option>
          <option value="Americano">Americano</option>
          <option value="Europeo">Europeo</option>
          <option value="Asiatico">Asiatico</option>
        </Select>
      </Campo>
      <Campo>
        <Label htmlFor="year">Año: </Label>
        <Select name="year" id="year" value={year} onChange={obtenerDatos}>
          <option value="">-- Seleccione --</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan:</Label>
        <Radio
          type="radio"
          id="plan1"
          name="plan"
          value="basico"
          checked={plan === 'basico'}
          onChange={obtenerDatos}
        />
        <Label htmlFor="plan1">Basico</Label>
        <Radio
          type="radio"
          id="plan"
          name="plan"
          value="completo"
          checked={plan === 'completo'}
          onChange={obtenerDatos}
        />
        <Label htmlFor="plan">Completo</Label>
      </Campo>
      <Boton type="submit" className="">
        Cotizar
      </Boton>
    </form>
  );
};

export default Formulario;
