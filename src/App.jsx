import { useState } from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

import Dashboard from './Dashboard';
import ProductsManagement from './ProductsManagement';


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

    return (
	<BrowserRouter>
	    <div className='grid-container'>
		<Header OpenSidebar={OpenSidebar}/>
		<Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
		<Home />
	    </div>
	</BrowserRouter>
    );
};

export default App;
