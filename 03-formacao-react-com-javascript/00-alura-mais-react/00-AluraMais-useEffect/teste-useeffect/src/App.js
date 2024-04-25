import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [racas, setRacas] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/doguinhos')
      .then(response => response.json())
      .then(json => setRacas(json));
  }, [])

  useEffect(() => {
    fetch(`http://localhost:8080/doguinhos?nome=${filtro}`)
      .then(response => response.json())
      .then(json => setRacas(json));
  }, [filtro])
  
  return (
    <div className="App">
      <h1>Doguinhos:</h1>
      <input placeholder='Filtrar por raça' onChange={e => setFiltro(e.target.value)}/>
      {racas.map(raca => {
        return <p key={raca.id}>{raca.nome}</p>
      })}
    </div>
  );
}

export default App;
