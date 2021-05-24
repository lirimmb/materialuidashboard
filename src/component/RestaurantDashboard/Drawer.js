import React, { Component } from 'react'
import {
    Drawer as MUIDrawer, 
    ListItem,
    List, 
    ListItemIcon,
    ListItemText
    } from '@material-ui/core';
import {ResMenuItems} from './ResMenuItems';
import {Link} from 'react-router-dom';

export class Drawer extends Component {
    render() {
        return (
            <MUIDrawer variant="permanent" className="sidebar-drawer">
                <h2 style={{color:'#8c000a', marginLeft:'20px'}}>Uberfoods</h2>
                <List>
                    {ResMenuItems.map((menu,index)=>(
                        <Link to={menu.url} style={{textDecoration:'none'}}>
                            <ListItem button key={menu}>
                                <ListItemIcon>{menu.icon}</ListItemIcon>
                                <ListItemText primary={menu.title}/>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </MUIDrawer>
        )
    }
}

export default Drawer
