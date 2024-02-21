import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }  
  ]

  const [colaboradores, setColaboradores] = useState([])

  function colaboradorCadastrado(colaborador) {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div>
      <Banner />
      <Formulario 
        novoColaborador={colaborador => colaboradorCadastrado(colaborador)}
        times={times.map(time => time.nome)}
      />
      {times.map((time, index) => {
        return <Time key={time.nome} nomeTime={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} timePos={index + 1} />
      })}
    </div>
  );
}

export default App;
