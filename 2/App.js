import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <Clock offset="1" format="25" />
    </div>
  );
}

export default App;
