import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './komponenter/navigation/Navbar';
import News from './views/News';
import PostDetails from './views/PostDetails';
import Login from './views/Login';
import Create from './views/Create'
import { ProtectedRoute } from './routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
     <Navbar />

     <div className="container">
       <Switch>
         <Route exact path="/" component={News} />
         <ProtectedRoute exact path="/create" component={Create} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/posts/:id" component={PostDetails} />
       </Switch>
     </div>

    </BrowserRouter>
  );
}

export default App;
