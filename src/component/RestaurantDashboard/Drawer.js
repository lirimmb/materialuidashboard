import React, { Component } from 'react'
import {
    Drawer as MUIDrawer, 
    ListItem,
    List, 
    ListItemIcon,
    ListItemText
    } from '@material-ui/core';
import {ResMenuItems} from './ResMenuItems';

export class Drawer extends Component {
    render() {
        return (
            <MUIDrawer variant="permanent">
                <List>
                    {ResMenuItems.map((menu,index)=>(
                        <ListItem button key={menu}>
                            <ListItemIcon>{menu.icon}</ListItemIcon>
                            <ListItemText primary={menu.title}/>
                        </ListItem>
                    ))}
                </List>
            </MUIDrawer>
        )
    }
}

export default Drawer
