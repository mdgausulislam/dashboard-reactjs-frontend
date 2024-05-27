import React, { useState } from 'react';
import './Sidebar.css'
import { Button } from '@mui/material';
import { FaAngleRight, FaBell, FaCartArrowDown, FaProductHunt } from 'react-icons/fa';
import { MdDashboard, MdMessage } from 'react-icons/md';
import { IoIosSettings, IoMdLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';


const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubMenu, setisToggleSubMenu] = useState(false)
    const isOpenSubMenu = (index) => {
        setActiveTab(index);
        setisToggleSubMenu(!isToggleSubMenu)
    }

    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to='/'>
                            <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`} onClick={() => isOpenSubMenu(0)}>
                                <span className="icon"><MdDashboard /></span>
                                Dashboard
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 1 && isToggleSubMenu === true ? 'active' : ''}`} onClick={() => isOpenSubMenu(1)}>
                            <span className="icon"><FaProductHunt /></span>
                            Products
                            <span className="arrow"><FaAngleRight /></span>
                        </Button>
                        <div className={`subMenuWrapper ${activeTab === 1 && isToggleSubMenu === true ? 'colapse' : 'colapsed'}`}>
                            <ul className="subMenu">
                                <li><Link to='#'>Product List</Link></li>
                                <li><Link to='#'>Product View</Link></li>
                                <li><Link to='#'>Product Upload</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to='/'>
                            <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`} >
                                <span className="icon"><FaCartArrowDown /></span>
                                Orders
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`}>
                                <span className="icon"><MdMessage /></span>
                                Message
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`}>
                                <span className="icon"><FaBell /></span>
                                Notifications
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`}>
                                <span className="icon"><IoIosSettings /></span>
                                Settings
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className="icon"><MdDashboard /></span>
                            Dashboard
                            <span className="arrow"><FaAngleRight /></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className="icon"><FaProductHunt /></span>
                            Products
                            <span className="arrow"><FaAngleRight /></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className="icon"><FaCartArrowDown /></span>
                            Orders
                            <span className="arrow"><FaAngleRight /></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className="icon"><MdMessage /></span>
                            Message
                            <span className="arrow"><FaAngleRight /></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className="icon"><FaBell /></span>
                            Notifications
                            <span className="arrow"><FaAngleRight /></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className="icon"><IoIosSettings /></span>
                            Settings
                            <span className="arrow"><FaAngleRight /></span>
                        </Button>
                    </li>
                </ul>
                <br />
                <div className="logoutWrapper">
                    <div className="logoutBox">
                        <Button variant='contained'><IoMdLogOut /> LogOut</Button>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Sidebar;