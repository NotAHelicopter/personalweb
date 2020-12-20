import pers1 from './pers1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pers1} className="App-pers" alt="logo" />
        <p>
          Francisco Almeida
          <p className="App-desc">
            BSc Finalist in Computer Science
          </p>
        </p>
      </header>
    </div>
  );
}

export default App;
