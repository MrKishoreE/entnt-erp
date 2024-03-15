import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Grid, TextField } from '@material-ui/core';

const OrderUpdateStatus = ({ orders, setOrders }) => {
    const { id } = useParams();
    const orderId = parseInt(id); // Convert id to number
    const order = orders.find(order => order.id === orderId);

    const [editedOrder, setEditedOrder] = useState(order);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedOrder({ ...editedOrder, [name]: value });
    };

    const handleSave = () => {
        const updatedOrders = orders.map(o => {
            if (o.id === orderId) {
                return editedOrder;
            }
            return o;
        });
        setOrders(updatedOrders);
    };

    return (
        <div style={{ padding: '20px' }}>
            <Grid container spacing={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid item xs={12} sm={6}>
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
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={order.id}>
                            <TableCell>{order.id}</TableCell>
                            <TableCell>
                                <TextField
                                    name="customerName"
                                    value={editedOrder.customerName}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell>{order.orderDate}</TableCell>
                            <TableCell>
                                <TextField
                                    name="status"
                                    value={editedOrder.status}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell>
                                <TextField
                                    name="email"
                                    value={editedOrder.email}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell>
                                <TextField
                                    name="phone"
                                    value={editedOrder.phone}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell>
                                <TextField
                                    name="amount"
                                    value={editedOrder.amount}
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default OrderUpdateStatus;
