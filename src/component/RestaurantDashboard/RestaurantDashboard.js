import React, { Component } from 'react';
import Drawer from './Drawer';
import DashboardPage from './DashboardPage/DashboardPage';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Restaurants from './RestaurantPage/Restaurants';
import Stats from './StatisticsPage/Stats';
import Notifications from './NotificationsPage/Notifications'
import Profile from './ProfilePage/Profile';
import './Restaurant.css'

export class RestaurantDashboard extends Component {
    render() {
        return (
            <Router>
                <div className="mainSection">
                    <div className="drawer-container">
                        <Drawer/>
                    </div>
                    <div className="left-content-container">
                        <Switch>
                            <Route path="/resDashboard" component={DashboardPage}/>
                            <Route path="/resRestaurants" component={Restaurants}/>
                            <Route path="/resStatistics" component={Stats}/>
                            <Route path="/resNotifications" component={Notifications}/>
                            <Route path="/resProfile" component={Profile}/>
                        </Switch>
                    </div>
                </div>
                        
            </Router>
        )   
    }
}

export default withRouter(RestaurantDashboard);
