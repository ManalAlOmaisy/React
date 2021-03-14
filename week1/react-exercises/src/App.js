import logo from './logo.svg';
import './App.css';
import HobbyList from "./components/ex1/HobbyList";
import Guarantee from "./components/ex2/Guarantee";
import Counter from "./components/ex3/Counter"

function App() {

  return (
    <div className="App">
      <HobbyList />
      <Guarantee />
      <Counter />
    </div>
  );
  }

export default App;
