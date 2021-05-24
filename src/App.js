import './App.css';
import {useState} from 'react';
import RestaurantDashboard from './component/RestaurantDashboard/RestaurantDashboard';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

function App() {

  const [isAuth, setIsAuth]=useState(false);

  return (
    <Router>
      <Route path="/" exact>
        <Link path="/resDashboard">
          <button onClick={()=>{setIsAuth(true)}}>Login</button>
        </Link>
      </Route>
      
      <ProtectedRoute 
        path="/resDashboard" 
        component={RestaurantDashboard}
        isAuth={isAuth}
        />
    </Router>
    
  );
}

export default App;
