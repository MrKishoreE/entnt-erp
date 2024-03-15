import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";

const ProductsAdd = ({ products, setProducts }) => {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const highestProductId = products.reduce((maxId, product) => {
      return product.id > maxId ? product.id : maxId;
    }, 0);
    const newProductId = highestProductId + 1;
    const productToAdd = { ...newProduct, id: newProductId };
    setProducts([...products, productToAdd]);
    // Reset form fields after submission
    setNewProduct({
      name: "",
      category: "",
      price: "",
      stock: "",
    });
    navigate("/products");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Grid
        container
        spacing={3}
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom style={{ color: "white" }}>
            Add Product
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
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={"addproducts"}>
              <TableCell>
                <TextField
                  name="name"
                  value={newProduct.name}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="category"
                  value={newProduct.category}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="price"
                  value={newProduct.price}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="stock"
                  value={newProduct.stock}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Add Product
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductsAdd;
