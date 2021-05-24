import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import NotificationsIcon from '@material-ui/icons/Notifications';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import EqualizerIcon from '@material-ui/icons/Equalizer';

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
        title: 'Statistics',
        url:'resStatistics',
        icon:<EqualizerIcon/>
    },
    {
        title: 'Notifications',
        url:'resNotifications',
        icon:<NotificationsIcon/>
    },
    {
        title: 'Profile',
        url:'resProfile',
        icon:<AccountBoxIcon/>
    }
]