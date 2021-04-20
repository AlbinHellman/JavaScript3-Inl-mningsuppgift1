
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './komponenter/navigation/Navbar';
  

function App() {
  return (
    <BrowserRouter>
     <Navbar />

    </BrowserRouter>
  );
}

export default App;
