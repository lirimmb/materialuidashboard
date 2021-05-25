import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ResIMG from '../../../assets/restaurant.jpg';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export class Restaurants extends Component {
    state={
        restaurants:[
            {
                restaurantID: 1,
                restaurantName: 'Restaurant Test1',
                dateCreated: '10/10/2011'
            },
            {
                restaurantID: 2,
                restaurantName: 'Restaurant Test2',
                dateCreated: '10/10/2012'
            },
            {
                restaurantID: 3,
                restaurantName: 'Restaurant Test3',
                dateCreated: '10/10/2013'
            },
        ]
    }

    render() {
        return (
            <div>
                <h2 style={{color:'#8c000a', fontWeight:900}}>Restaurants</h2>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell >Restaurant Name</TableCell>
                                <TableCell >Added Date</TableCell>
                                <TableCell >Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.restaurants.map((res) => (
                                <TableRow>
                                    <TableCell ><Avatar alt="Restaurant" src={ResIMG} /></TableCell>
                                    <TableCell><strong>{res.restaurantName}</strong></TableCell>
                                    <TableCell><strong>{res.dateCreated}</strong></TableCell>
                                    <TableCell >
                                        <DeleteForeverIcon style={{ color: '#dc004e' }} />
                                        <MoreVertOutlinedIcon />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default Restaurants
