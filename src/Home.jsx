import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Temp from './Temp';
import ProductsManagement from './ProductsManagement';
import OrdersManagement from './OrdersManagement';
import ProductsEdit from './ProductsEdit';
import ProductsAdd from './ProductsAdd';
import Dashboard from './Dashboard';
import OrdersViewDetails from './OrdersViewDetails';
import OrderUpdateStatus from './OrderUpdateStatus';
import OrderCalendarView from './OrderCalendarView';

import { BsFillArchiveFill, BsMenuButtonWideFill, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { CalendarToday } from '@material-ui/icons';


function Home() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', category: 'Category 1', price: 100, stock: 100 },
        { id: 2, name: 'Product 2', category: 'Category 2', price: 200, stock: 50 },
    ]);

    // Mock order data
    const [orders, setOrders] = useState([
	{ id: 1, customerName: 'John Doe', orderDate: '2024-03-07', status: 'Pending', expectedDeliveryData: '2024-03-17', email: "alice@gmail.com", phone: "8879878677", amount: "800"},
	{ id: 2, customerName: 'Jane Smith', orderDate: '2024-03-06', status: 'Completed', expectedDeliveryData: '2024-03-20', email: "bob@gmail.com", phone: "7679878677", amount: "600"},
    ]);

    return (
        <div className='main-container'>
                <Routes>
                    {/* Dashboard always rendered at root */}
                    <Route key={'dashboard'} path={'/'} element={<Dashboard  products={products} orders={orders} />} />
                    {/* Other routes */}
                    <Route key={'products'} path="/products" element={<ProductsManagement products={products} setProducts={setProducts} />} />
                    <Route key={'products_edit'} path="/products/edit/:id" element={<ProductsEdit products={products} setProducts={setProducts} />} />
                    <Route key={'products_add'} path="/products/add" element={<ProductsAdd products={products} setProducts={setProducts} />} />
                    <Route key={'orders'} path="/orders" element={<OrdersManagement orders={orders} setOrders={setOrders} />} />
                    <Route key={'orders_view_details'} path="/orders/viewdetails/:id" element={<OrdersViewDetails orders={orders} setOrders={setOrders} />} />
		    <Route key={'orders_view_details'} path="/orders/updatestatus/:id" element={<OrderUpdateStatus orders={orders} setOrders={setOrders} />} />		    		    
                    <Route key={'orders_calendar'} path="/orders/calendar" element={<OrderCalendarView orders={orders} setOrders={setOrders} />} />
                </Routes>
        </div>
    );
}

export default Home;
