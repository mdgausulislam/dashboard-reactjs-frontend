import React, { useState } from 'react';
import './DashBoard.css'
import DashboardBox from './DashboardBox/DashboardBox';
import { FaEye, FaPencilAlt, FaUserCircle } from 'react-icons/fa';
import { IoIosTimer, IoMdCart } from 'react-icons/io';
import { MdDelete, MdShoppingBag } from 'react-icons/md';
import { GiStarsStack } from 'react-icons/gi';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HiDotsVertical } from 'react-icons/hi';
import { Button } from '@mui/material';
import { AreaChart, Area, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';

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
    const [showBy, setShowBy] = useState('');
    const [categoryBy, setCategoryBy] = useState('');
    const [brandBy, setBrandBy] = useState('');
    const [searchBy, setSearchBy] = useState('');

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

                    <div className="row cardFilters mt-3">
                        <div className="col-md-3">
                            <h4>Show By</h4>
                            <FormControl size="small" className='w-100'>
                                <Select
                                    value={showBy}
                                    onChange={(e) => setShowBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className='w-100'
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-md-3">
                            <h4>CATEGORY BY</h4>
                            <FormControl size="small" className='w-100'>
                                <Select
                                    value={categoryBy}
                                    onChange={(e) => setCategoryBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className='w-100'
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-md-3">
                            <h4>BRAND BY</h4>
                            <FormControl size="small" className='w-100'>
                                <Select
                                    value={brandBy}
                                    onChange={(e) => setBrandBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className='w-100'
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-md-3">
                            <h4>SEARCH BY</h4>
                            <FormControl size="small" className='w-100'>
                                <Select
                                    value={searchBy}
                                    onChange={(e) => setSearchBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className='w-100'
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                            <thead className='thead-dark'>
                                <tr>
                                    <th>UID</th>
                                    <th>Product</th>
                                    <th>Category</th>
                                    <th>Brand</th>
                                    <th>Price</th>
                                    <th>Srock</th>
                                    <th>Rating</th>
                                    <th>Order</th>
                                    <th>Sales</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">

                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" className='w-100' />
                                                </div>
                                            </div>
                                            <div className="ProductInfo">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>

                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className='old'>$19.00</del>
                                        <span className='new text-danger'>$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className='secondary' color="secondary"> <FaEye /></Button>
                                            <Button className='success' color="success"> <FaPencilAlt /></Button>
                                            <Button className='error' color="error"> <MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">

                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" className='w-100' />
                                                </div>
                                            </div>
                                            <div className="ProductInfo">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>

                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className='old'>$19.00</del>
                                        <span className='new text-danger'>$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className='secondary' color="secondary"> <FaEye /></Button>
                                            <Button className='success' color="success"> <FaPencilAlt /></Button>
                                            <Button className='error' color="error"> <MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">

                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" className='w-100' />
                                                </div>
                                            </div>
                                            <div className="ProductInfo">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>

                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className='old'>$19.00</del>
                                        <span className='new text-danger'>$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className='secondary' color="secondary"> <FaEye /></Button>
                                            <Button className='success' color="success"> <FaPencilAlt /></Button>
                                            <Button className='error' color="error"> <MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">

                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" className='w-100' />
                                                </div>
                                            </div>
                                            <div className="ProductInfo">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>

                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className='old'>$19.00</del>
                                        <span className='new text-danger'>$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className='secondary' color="secondary"> <FaEye /></Button>
                                            <Button className='success' color="success"> <FaPencilAlt /></Button>
                                            <Button className='error' color="error"> <MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">

                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" className='w-100' />
                                                </div>
                                            </div>
                                            <div className="ProductInfo">
                                                <h6>Tops and skirt set for Female...</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>

                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className='old'>$19.00</del>
                                        <span className='new text-danger'>$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className='secondary' color="secondary"> <FaEye /></Button>
                                            <Button className='success' color="success"> <FaPencilAlt /></Button>
                                            <Button className='error' color="error"> <MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="d-flex tableFooter">
                            <p>showing <b>12</b> of <b>60</b> results</p>
                            <Pagination count={10} color="primary" className='pagination' />
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default DashBoard;

{/* <div className="action d-flex align-items-center">
    <Button>
        <FaEye />
    </Button>
    <Button color=''>
        <FaPencilAlt />
    </Button>
    <Button>
        <MdDelete />
    </Button>
</div> */}