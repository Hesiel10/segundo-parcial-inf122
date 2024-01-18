import logo from './logo.svg';
import './App.css';
import MisMetas from './components/MisMetas';
import Metas from './components/Meta';
import Aprender from './components/Aprender';

function App() {
  return (
    <div className="App">
      <MisMetas/>
      <Metas/>
      <Aprender/>
    </div>
  );
}

export default App;
