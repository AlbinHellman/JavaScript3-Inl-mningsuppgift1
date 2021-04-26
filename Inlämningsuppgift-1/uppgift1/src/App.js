import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './komponenter/navigation/Navbar';
import News from './views/News';
import PostDetails from './views/PostDetails';
import Login from './views/Login';

function App() {
  return (
    <BrowserRouter>
     <Navbar />

     <div className="container">
       <Switch>
         <Route exact path="/" component={News} />
         
         <Route exact path="/login" component={Login} />
         <Route exact path="/posts/:id" component={PostDetails} />
       </Switch>
     </div>

    </BrowserRouter>
  );
}

export default App;
