import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Grid } from '@material-ui/core';

const ProductsManagement = ({products, setProducts}) => {
    // Function to handle product deletion
    const handleDelete = (productId) => {
	const updatedProducts = products.filter(product => product.id !== productId);
	setProducts(updatedProducts);
    };

    return (
	<div style={{ padding: '20px' }}>
	    <Grid container spacing={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
		<Grid item xs={12} sm={6}>
		    <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
			Products Management
		    </Typography>
		</Grid>
	    </Grid>
	    <TableContainer component={Paper}>
		<Table>
		    <TableHead>
			<TableRow>
			    <TableCell>Name</TableCell>
			    <TableCell>Category</TableCell>
			    <TableCell>Price</TableCell>
			    <TableCell>Stock</TableCell>
			    <TableCell>Action</TableCell>
			</TableRow>
		    </TableHead>
		    <TableBody>
			{products.map(product => (
			    <TableRow key={product.id}>
				<TableCell>{product.name}</TableCell>
				<TableCell>{product.category}</TableCell>
				<TableCell>₹{product.price}</TableCell>
				<TableCell>{product.stock}</TableCell>
				<TableCell>
				    <NavLink
					to={`/products/edit/${product.id}`}
					className={'active'}
				    >

					<Button variant="contained" color="primary" size="small" style={{ marginRight: '10px' }}>Edit</Button>
				    </NavLink>

				    <Button variant="contained" color="secondary" size="small" onClick={()=>handleDelete(product.id)}>Delete</Button>

				</TableCell>
			    </TableRow>
			))}
		    </TableBody>
		</Table>
	    </TableContainer>
	    <NavLink
		to={'/products/add'}
		className={'active'}
	    >
		
		<Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={ () => {}}>Add Product</Button>
	    </NavLink>
	</div>
    );
}

export default ProductsManagement;

