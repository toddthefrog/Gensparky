import './App.css';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <Test 
        name="Jimmy"
        age="30"
        data="4"  
      />
    </div>
  );
}

export default App;
