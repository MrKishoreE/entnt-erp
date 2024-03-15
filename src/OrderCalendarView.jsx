import React, { useState } from "react";
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
} from "@material-ui/core";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const OrdersCalendarView = ({ orders, setOrders }) => {
  const [value, onChange] = useState(new Date());

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero if needed
    const day = String(date.getDate()).padStart(2, "0"); // Add leading zero if needed
    return `${year}-${month}-${day}`;
  }

  const ordersForDelivery = orders.filter(
    (order) => order.expectedDeliveryData === formatDate(value)
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Calendar onChange={onChange} value={value} />
      </div>
      <br></br>
      <div>
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
              {ordersForDelivery.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>{order.orderDate}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>{order.email}</TableCell>
                  <TableCell>{order.phone}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default OrdersCalendarView;
