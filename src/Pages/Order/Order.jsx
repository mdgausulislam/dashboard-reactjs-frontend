import React, { useState } from 'react';
import { FaCheckCircle, FaEye, FaPencilAlt, FaUser } from 'react-icons/fa';
import { MdBlock, MdDelete, MdLocalShipping, MdVerifiedUser } from 'react-icons/md';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import moment from 'moment';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs';
import { PiDotsThreeCircleFill } from 'react-icons/pi';
import { AiFillMinusCircle } from 'react-icons/ai';
import { GiShoppingBag } from 'react-icons/gi';
import './Order.css'


const breadcrumbData = [
    { label: 'Dashboard', href: '#', icon: true },
    { label: 'Order' },

];

const Order = () => {
    const [showBy, setShowBy] = useState('');
    const [categoryBy, setCategoryBy] = useState('');
    const [brandBy, setBrandBy] = useState('');
    const [searchBy, setSearchBy] = useState('');

    const users = [
        {
            id: 1,
            client: 'mahmudul hasan',
            product: '2(item)',
            amount: '$56.00',
            payment: 'bikash',
            status: 'Pending',
            created: '2023-06-01 12:34:56'
        },
        {
            id: 2,
            client: 'mahmudul hasan',
            product: '2(item)',
            amount: '$56.00',
            payment: 'bikash',
            status: 'Pending',
            created: '2023-06-01 12:34:56'
        },
        {
            id: 3,
            client: 'mahmudul hasan',
            product: '2(item)',
            amount: '$56.00',
            payment: 'bikash',
            status: 'Pending',
            created: '2023-06-01 12:34:56'
        },
        {
            id: 4,
            client: 'mahmudul hasan',
            product: '2(item)',
            amount: '$56.00',
            payment: 'bikash',
            status: 'Cancel',
            created: '2023-06-01 12:34:56'
        },
        {
            id: 5,
            client: 'mahmudul hasan',
            product: '2(item)',
            amount: '$56.00',
            payment: 'bikash',
            status: 'Accept',
            created: '2023-06-01 12:34:56'
        }
    ];

    return (
        <div className='right-content w-100'>
            <BreadCrumbs title="Order List" breadcrumbs={breadcrumbData} />

            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="shadow mc-float-card lg blue ">
                        <h3>547</h3>
                        <p>Pending_orders</p>
                        <span className="icons-bag"><PiDotsThreeCircleFill /></span>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="shadow mc-float-card lg green">
                        <h3>605</h3>
                        <p>Shipped_orders</p>
                        <span className="icons-widgets"><MdLocalShipping /></span>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="shadow mc-float-card lg purple">
                        <h3>249</h3>
                        <p>Recieved_orders</p>
                        <span className="icons-verified"><GiShoppingBag /></span>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="shadow mc-float-card lg red">
                        <h3>249</h3>
                        <p>Cancelled_orders</p>
                        <span className="icons-verified"><AiFillMinusCircle /></span>
                    </div>
                </div>
            </div>

            <div className="card shadow border-0 p-3 mt-4">
                <h5>Order Information</h5>
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
                    <table className="table table-bordered v-align width-fixed">
                        <thead className='thead-dark'>
                            <tr>
                                <th>UID</th>
                                <th>Client</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Date Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='mc-table-body2'>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td className='font-weight-bold'>#{user.id}</td>
                                    <td className='userProfile'>
                                        <div className="mc-table-product md">
                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="" />
                                            <div className="mc-table-group">
                                                <p>{user.client}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='user-role'>{user.product}</td>
                                    <td className='userMail'>{user.amount}</td>
                                    <td className='userPassword'>{user.payment}</td>
                                    <td><Button className='success1 green'>{user.status}</Button></td>
                                    <td className='userDate'>{moment(user.created).format('YYYY-MM-DD HH:mm:ss')}</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Link to='/products/details'>
                                                <Button className='secondary' color="secondary"> <FaEye /></Button>
                                            </Link>
                                            <Button className='success' color="success"> <FaPencilAlt /></Button>
                                            <Button className='error' color="error"> <MdBlock /></Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="d-flex tableFooter">
                        <p>showing <b>12</b> of <b>60</b> results</p>
                        <Pagination count={10} color="primary" className='pagination' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
