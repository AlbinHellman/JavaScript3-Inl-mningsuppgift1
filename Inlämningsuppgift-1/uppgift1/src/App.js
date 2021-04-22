
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './komponenter/navigation/Navbar';
import News from './views/News';
import PostDetails from './views/PostDetails';

function App() {
  return (
    <BrowserRouter>
     <Navbar />

     <div className="container">
       <switch>
         <Route exact path="/" component={News} />

         <Route exact path="/posts/:id" component={PostDetails} />
       </switch>
     </div>

    </BrowserRouter>
  );
}

export default App;
