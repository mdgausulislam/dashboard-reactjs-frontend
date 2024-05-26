import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo1.webp';
import { Button } from '@mui/material';
import { MdMenuOpen, MdOutlineLightMode, MdOutlineMailOutline } from 'react-icons/md';
import SearchBox from '../SearchBox/SearchBox';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegBell } from 'react-icons/fa';

import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenNotificationDrop, setisOpenNotificationDrop] = useState(false);
    const openMyAcc = Boolean(anchorEl);
    const openNotification = Boolean(isOpenNotificationDrop);

    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };
    const handleopenMynotificationsDrop = () => {
        setisOpenNotificationDrop(true)
    };

    const handleCloseMynotificationsDrop = () => {
        setisOpenNotificationDrop(false)
    };

    return (
        <>
            <header className='d-flex align-items-center'>
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/* logo wrapper */}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className='d-flex align-items-center logo'>
                                <img src={Logo} alt="Logo" />
                                <span className='ml-2'>HOTASH</span>
                            </Link>
                        </div>

                        <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                            <Button className='rounded-circle mr-3'><MdMenuOpen /></Button>
                            <SearchBox />
                        </div>
                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                            <Button className='rounded-circle mr-3'><MdOutlineLightMode /></Button>
                            <Button className='rounded-circle mr-3'><IoCartOutline /></Button>
                            <Button className='rounded-circle mr-3'><MdOutlineMailOutline /></Button>

                            <div className='dropDownWrapper position-relative'>
                                <Button className='rounded-circle mr-3' onClick={handleopenMynotificationsDrop}><FaRegBell /></Button>
                                <Menu
                                    anchorEl={isOpenNotificationDrop}
                                    className='notifications dropDown_List'
                                    id="notifications"
                                    open={openNotification}
                                    onClose={handleCloseMynotificationsDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <div className="head pl-3 pb-0">
                                        <h4>Notifications (34)</h4>
                                    </div>
                                    <Divider className='mb-1' />
                                    <div className="scroll">
                                        <MenuItem onClick={handleCloseMynotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropDownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b>
                                                            added to his favorite list
                                                            <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago!</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMynotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropDownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b>
                                                            added to his favorite list
                                                            <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago!</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMynotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropDownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b>
                                                            added to his favorite list
                                                            <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago!</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMynotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropDownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b>
                                                            added to his favorite list
                                                            <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago!</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMynotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropDownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b>
                                                            added to his favorite list
                                                            <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago!</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMynotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropDownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b>
                                                            added to his favorite list
                                                            <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago!</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMynotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropDownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudul</b>
                                                            added to his favorite list
                                                            <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago!</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                    </div>
                                    <div className="w-100 pl-3 pr-3 mb-0">
                                        <Button className='btn-blue w-100'>View all Notification</Button>
                                    </div>
                                </Menu>
                            </div>
                            <div className="myAccWrapper">
                                <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="User Avatar" />
                                        </span>
                                    </div>
                                    <div className="userInfo">
                                        <h4>Md Gousul Islam</h4>
                                        <p className='mb-0'>gausulislam5</p>
                                    </div>
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={openMyAcc}
                                    onClose={handleCloseMyAccDrop}

                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        My Account
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Reset Password
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
