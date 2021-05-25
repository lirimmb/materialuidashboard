import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system';




export class Restaurants extends Component {
    state={
        restaurants:[
            {
                restaurantID: 1,
                restaurantName: 'Restaurant Test1',
                avatar: ''
            },
            {
                restaurantID: 2,
                restaurantName: 'Restaurant Test2',
            },
            {
                restaurantID: 3,
                restaurantName: 'Restaurant Test3',
            },
        ]
    }

    render() {
        return (
            <div>
                {this.state.restaurants.map((res)=>(
                    <Box p={1} my={0.5} className="restaurants-box">

                        <Typography><strong>{res.restaurantName}</strong></Typography>
                    </Box>
                ))}
                
            </div>
        )
    }
}

export default Restaurants
