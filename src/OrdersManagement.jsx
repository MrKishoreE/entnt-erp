import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Grid } from '@material-ui/core';

const OrdersManagement = ({orders, setOrders}) => {
    // Function to handle order deletion
    const handleDelete = (ordersId) => {
	const updatedOrders = orders.filter(order => order.id !== ordersId);
	setOrders(updatedOrders);
    };

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
			    <TableCell>Action</TableCell>
			</TableRow>
		    </TableHead>
		    <TableBody>
			{orders.map(order => (
			    <TableRow key={order.id}>
				<TableCell>{order.id}</TableCell>
				<TableCell>{order.customerName}</TableCell>
				<TableCell>{order.orderDate}</TableCell>
				<TableCell>{order.status}</TableCell>
				<TableCell>
				    <NavLink
					to={`/orders/viewdetails/${order.id}`}
					className={'active'}
				    >
					<Button variant="contained" color="primary" size="small" style={{marginRight: '10px'}}>View Details</Button>
				    </NavLink>
				    <NavLink
					to={`/orders/updatestatus/${order.id}`}
					className={'active'}
				    >
					<Button variant="contained" color="primary" size="small" style={{marginRight: '10px'}}>Update Status</Button>
				    </NavLink>
				    <Button variant="contained" color="secondary" size="small" onClick={()=>handleDelete(order.id)}>Delete</Button>
				</TableCell>
			    </TableRow>
			))}
		    </TableBody>
		</Table>
	    </TableContainer>
	</div>
    );
}

export default OrdersManagement;
