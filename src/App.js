import './App.css';
import { Titulo } from './Components/Titulo';
import Consulta from './Components/Consulta';

const App = () => {
  return (
    <div className="App">
      <Titulo>Formulario de Consulta</Titulo>
      <Consulta />
    </div>
  );
}

export default App;
