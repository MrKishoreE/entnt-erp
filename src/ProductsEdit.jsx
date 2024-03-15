import React, { useState } from "react";
import { useParams } from "react-router-dom";

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

const ProductsEdit = ({ products, setProducts }) => {
  const { id } = useParams();
  const productId = parseInt(id); // Convert id to number
  const product = products.find((product) => product.id === productId);

  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSave = () => {
    const updatedProducts = products.map((p) => {
      if (p.id === productId) {
        return editedProduct;
      }
      return p;
    });
    setProducts(updatedProducts);
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
            Edit Product
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
                  value={editedProduct.name}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="category"
                  value={editedProduct.category}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="price"
                  value={editedProduct.price}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="stock"
                  value={editedProduct.stock}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                >
                  Save
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductsEdit;
