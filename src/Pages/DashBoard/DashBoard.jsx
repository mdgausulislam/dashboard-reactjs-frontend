import React, { useState } from 'react';
import './DashBoard.css'
import DashboardBox from './DashboardBox/DashboardBox';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosTimer, IoMdCart } from 'react-icons/io';
import { MdShoppingBag } from 'react-icons/md';
import { GiStarsStack } from 'react-icons/gi';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HiDotsVertical } from 'react-icons/hi';
import { Button } from '@mui/material';
import { AreaChart, Area, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'MON',
        uv: 2000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'TUE',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'WED',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'THU',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'FRI',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'SAT',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'SUN',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const DashBoard = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const ITEM_HEIGHT = 48;
    return (
        <>
            <section className="right-content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da356", "#48d483"]} icon={<FaUserCircle />} grow={true} />
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<IoMdCart />} />
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<MdShoppingBag />} />
                            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<GiStarsStack />} />
                        </div>
                    </div>
                    <div className="col-md-4 pl-0">
                        <div className="box graphBox">
                            <div className="d-flex align-items-center w-100 bottomEle">
                                <h4 className="text-white mb-0 mt-0 pl-5">
                                    Total Sales
                                </h4>
                                <div className="ml-auto pr-3">
                                    <Button className="ml-auto toggleIcon" onClick={handleClick}><HiDotsVertical /></Button>
                                    <Menu
                                        className='dropDown_menu'
                                        MenuListProps={{
                                            'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: '20ch',
                                            },
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer /> Last Day
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer />  Last Week
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer />   Last Month
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer />  Last Year
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </div>
                            <h3 className='text-white font-weight-bold pl-5 pt-3'>$3,787,681.00</h3>
                            <p className='pl-5'>$3,578.90 in last month</p>

                            <div className='recharts' style={{ width: '100%', height: '225px' }}>
                                <ResponsiveContainer>
                                    <AreaChart
                                        className='areaCharts'
                                        data={data}
                                        margin={{
                                            top: 0,
                                            right: 0,
                                            left: 0,
                                            bottom: 0,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="name" stroke="#8884d8" fill="#8884d8" />
                                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className='hd'>Best Selling Products</h3>

                    <div className="row cardFilters">
                        <div className="col">
                            <h4>Show By</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DashBoard;