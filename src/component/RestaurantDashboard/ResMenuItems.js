import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import NotificationsIcon from '@material-ui/icons/Notifications';
import RestaurantIcon from '@material-ui/icons/Restaurant';

export const ResMenuItems=[
    {
        title: 'Dashboard',
        url:'resDashboard',
        icon: <DashboardIcon/>
    },
    {
        title: 'Restaurants',
        url:'resRestaurants',
        icon:<RestaurantIcon/>
    },
    {
        title: 'Notification',
        url:'resNotification',
        icon:<NotificationsIcon/>
    },
    {
        title: 'Profile',
        url:'resProfile',
        icon:<AccountBoxIcon/>
    }
]