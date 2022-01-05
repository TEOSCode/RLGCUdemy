import styled from '@emotion/styled';
import Header from './components/Header';
import Formulario from './components/Formulario';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 12px auto;
`;
const ContenedorForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;
function App() {
  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorForm>
        <Formulario />
      </ContenedorForm>
    </Contenedor>
  );
}

export default App;
