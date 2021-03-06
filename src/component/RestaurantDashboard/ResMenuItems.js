import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import NotificationsIcon from '@material-ui/icons/Notifications';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Badge from '@material-ui/core/Badge';


export const ResMenuItems=[
    [
     /*Restaurant Manager*/
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
        icon:<Badge color="secondary" badgeContent={5}><NotificationsIcon/></Badge>
    },
    {
        title: 'Profile',
        url:'resProfile',
        icon:<AccountBoxIcon/>
    }],
    [
        /*Delivery guy*/
        {
            title: 'Dashboard',
            url:'resDashboard',
            icon: <DashboardIcon/>
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
    ],
    /*Admin*/
    {
        title: 'Dashboard',
        url:'resDashboard',
        icon: <DashboardIcon/>
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