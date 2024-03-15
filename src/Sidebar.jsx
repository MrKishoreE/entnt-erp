import React from 'react'
import { NavLink } from 'react-router-dom';
import 
{BsGrid1X2Fill, BsFillArchiveFill, BsMenuButtonWideFill}
from 'react-icons/bs';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <p style={{ color: '#FFF', textDecoration: 'none' }}>ERP SYSTEM</p>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
        <ul className='sidebar-list'>
        <NavLink style={{ color: '#FFF', textDecoration: 'none' }} to={"/"} className={'active'}>
            <li className='sidebar-list-item' key="dashboardkey">		
		    <BsGrid1X2Fill className='icon'/> Dashboard
	    </li>
        </NavLink>
        </ul>
        <ul className='sidebar-list'>
            
		<NavLink style={{ color: '#FFF', textDecoration: 'none' }} 
                    to={"/products"}
		    className={'active'}
		>
            <li className='sidebar-list-item' key="productskey">
		    <BsFillArchiveFill className='icon'/> Products 
            </li>
		</NavLink>	    
        </ul>
        <ul className='sidebar-list'>
		<NavLink style={{ color: '#FFF', textDecoration: 'none' }} 
                    to={"/orders"}
		    className={'active'}
		>
            <li className='sidebar-list-item' key="orderskey">

		    <BsMenuButtonWideFill className='icon'/> Orders 
	    </li>
        </NavLink>
        </ul>
        <ul className='sidebar-list'>
		<NavLink style={{ color: '#FFF', textDecoration: 'none' }} 
                    to={"/orders/calendar"}
		    className={'active'}
		>
            <li className='sidebar-list-item' key="orderskey">

		    <BsMenuButtonWideFill className='icon'/> Orders Calendar		
	    </li>
        </NavLink>
        </ul>

    </aside>
  )
}

export default Sidebar
