import './App.css';
import Counter from './Pages/CounterPage';
// import { useState } from 'react';

function App() {
  // const [stars, setStars] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
