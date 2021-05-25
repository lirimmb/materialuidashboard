import './App.css';
import {useState} from 'react';
import RestaurantDashboard from './component/RestaurantDashboard/RestaurantDashboard';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

function App() {

  const [isAuth, setIsAuth]=useState(true);

  return (
    <Router>
      <Route path="/" exact>
            <button onClick={()=>{setIsAuth(true)}}>Log in</button>      
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
