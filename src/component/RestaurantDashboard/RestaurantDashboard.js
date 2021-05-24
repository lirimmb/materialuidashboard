import React, { Component } from 'react';
import Drawer from './Drawer';
import DashboardPage from './DashboardPage/DashboardPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Restaurants from './RestaurantPage/Restaurants';
import Stats from './StatisticsPage/Stats';
import Notifications from './NotificationsPage/Notifications'
import Profile from './ProfilePage/Profile';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';




export class RestaurantDashboard extends Component {
    render() {
        return (
            <Router>
                <Grid 
                    container
                    spacing={0}
                >
                    <Grid item xs={2}>
                        <Drawer/>
                    </Grid>
                    <Grid item xs={10}>
                        <Switch>
                            <Route path="/resDashboard" component={DashboardPage}/>
                            <Route path="/resRestaurants" component={Restaurants}/>
                            <Route path="/resStatistics" component={Stats}/>
                            <Route path="/resNotification" component={Notifications}/>
                            <Route path="/resProfile" component={Profile}/>
                        </Switch>
                    </Grid>
                </Grid>
            </Router>
        )   
    }
}

export default RestaurantDashboard
