import { useState } from 'react'
import { NavLink } from 'react-router-dom';

import 
{BsFillArchiveFill, BsMenuButtonWideFill}
from 'react-icons/bs';

const Dashboard = ({products, orders}) => {
    return (
	<div className='grid-container'>
	    <main className='main-container'>
		<div className='main-title'>
		    <h3>DASHBOARD</h3>
		</div>

		<div className='main-cards'>
		<div className='card'>
		<NavLink style={{ color: '#FFF', textDecoration: 'none' }} to={"/products"} className={'active'}>
		
			<div className='card-inner'>
			    <h3>Total Products</h3>
			    <BsFillArchiveFill className='card_icon'/>
			</div>
			<h1>{products.length}</h1>

			</NavLink>
			</div>
		    <div className='card'>
			<NavLink style={{ color: '#FFF', textDecoration: 'none' }} to={"/products"} className={'active'}>
			<div className='card-inner'>
			    <h3>Total Orders</h3>
			    <BsMenuButtonWideFill className='card_icon'/>
			</div>			
			<h1>{orders.length}</h1>
			</NavLink>
		    </div>
		</div>
	    </main>
	</div>
    );
};

export default Dashboard;
