import React, { useState } from 'react';
import { FaCheckCircle, FaEye, FaPencilAlt, FaUser } from 'react-icons/fa';
import { MdBlock, MdDelete, MdVerifiedUser } from 'react-icons/md';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import moment from 'moment';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs';
import { PiDotsThreeCircleFill } from 'react-icons/pi';
import './UserList.css'

const breadcrumbData = [
    { label: 'Dashboard', href: '#', icon: true },
    { label: 'Users', href: '#' },
    { label: 'Users List' },
];

const UserList = () => {
    const [showBy, setShowBy] = useState('');
    const [categoryBy, setCategoryBy] = useState('');
    const [brandBy, setBrandBy] = useState('');
    const [searchBy, setSearchBy] = useState('');

    const users = [
        {
            id: 1,
            name: 'mahmudul hasan',
            role: 'member',
            email: 'gausulislam5@gmail.com',
            password: '$2a$06$4Uoeanolkkpo8gBDNIYt6eid0Qm8cCwsYU5VwaQcBsB6KISR1kwf2',
            phone: '01785003901',
            status: 'Approved',
            created: '2023-06-01 12:34:56'
        }
    ];

    return (
        <div className='right-content w-100'>
            <BreadCrumbs title="User List" breadcrumbs={breadcrumbData} />

            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="shadow mc-float-card lg blue ">
                        <h3>547</h3>
                        <p>Pending Users</p>
                        <span className="icons-bag"><PiDotsThreeCircleFill /></span>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="shadow mc-float-card lg green">
                        <h3>605</h3>
                        <p>Approved Users</p>
                        <span className="icons-widgets"><FaCheckCircle /></span>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="shadow mc-float-card lg purple">
                        <h3>249</h3>
                        <p>Blocked Users</p>
                        <span className="icons-verified"><MdVerifiedUser /></span>
                    </div>
                </div>
            </div>

            <div className="card shadow border-0 p-3 mt-4">
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
                                <th>Name</th>
                                <th>Role</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Created</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='mc-table-body1'>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td className='font-weight-bold'>#{user.id}</td>
                                    <td className='userProfile'>
                                        <div className="mc-table-product md">
                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="" />
                                            <div className="mc-table-group">
                                                <p>{user.name}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='user-role'><FaUser /> {user.role}</td>
                                    <td className='userMail'>{user.email}</td>
                                    <td className='userPassword'>{user.password}</td>
                                    <td className='UserPhone'>{user.phone}</td>
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

export default UserList;
