import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  function colaboradorCadastrado(colaborador) {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div>
      <Banner />
      <Formulario 
        novoColaborador={colaborador => colaboradorCadastrado(colaborador)}
      />
      <Time nomeTime="Programação" />
      <Time nomeTime="Front End" />
    </div>
  );
}

export default App;
