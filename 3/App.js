import logo from './logo.svg';
import './App.css';
import NumperInput from './components/NumperInput';
import SortTable from './components/SortTable';
function App() {
  const table_data = [
    {"name": "Butter", "price": 0.9, "inStock": 99, 'id': 1},
    {"name": "Cheese", "price": 4.9, "inStock": 20, 'id': 2},
    {"name": "Fancy French Cheese", "price": 99, "inStock": 12, 'id': 3},
    {"name": "Heavy Cream", "price": 3.9, "inStock": 0, 'id': 4},
    {"name": "Milk", "price": 1.9, "inStock": 32, 'id': 5},
  ]
  return (
    <div className="App">
      <NumperInput/>
      <SortTable data={table_data}/>
      
    </div>
  );
}

export default App;
