import React from 'react';
import { NavLink, useParams } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Grid } from '@material-ui/core';

const OrdersViewDetails = ({orders, setOrders}) => {
    const { id } = useParams();
    const orderId = parseInt(id); // Convert id to number
    const order = orders.find(order => order.id === orderId);
    
    return (
	<div style={{ padding: '20px' }}>
	    <Grid container spacing={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
		<Grid item xs={12} sm={6} >
		    <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
			Orders Management
		    </Typography>
		</Grid>
	    </Grid>
	    <TableContainer component={Paper}>
		<Table>
		    <TableHead>
			<TableRow>
			    <TableCell>Order ID</TableCell>
			    <TableCell>Customer Name</TableCell>
			    <TableCell>Order Date</TableCell>
			    <TableCell>Status</TableCell>
			    <TableCell>Email</TableCell>
			    <TableCell>Phone</TableCell>
			    <TableCell>Amount</TableCell>
			</TableRow>
		    </TableHead>
		    <TableBody>
			<TableRow key={order.id}>
			    <TableCell>{order.id}</TableCell>
			    <TableCell>{order.customerName}</TableCell>
			    <TableCell>{order.orderDate}</TableCell>
			    <TableCell>{order.status}</TableCell>
			    <TableCell>{order.email}</TableCell>
			    <TableCell>{order.phone}</TableCell>
			    <TableCell>{order.amount}</TableCell>		  
			</TableRow>
		    </TableBody>
		</Table>
	    </TableContainer>
	</div>
    );
}

export default OrdersViewDetails;
