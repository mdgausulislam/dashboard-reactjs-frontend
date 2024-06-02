import React, { useState } from 'react';
import { FaEye, FaPencilAlt } from 'react-icons/fa';
import { MdDelete, MdOutlineWidgets, MdVerifiedUser, MdWidgets } from 'react-icons/md';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs';
import { GiShoppingBag } from 'react-icons/gi';
import './ProductList.css'


const breadcrumbData = [
    { label: 'DashBoard', href: '#', icon: true },
    { label: 'Products', href: '#' },
    { label: 'Products List' },
];


const ProductList = () => {
    const [showBy, setShowBy] = useState('');
    const [categoryBy, setCategoryBy] = useState('');
    const [brandBy, setBrandBy] = useState('');
    const [searchBy, setSearchBy] = useState('');
    return (
        <div className='right-content w-100'>
            <BreadCrumbs title="Product List" breadcrumbs={breadcrumbData} />

            <div className="row">
                <div class="col-lg-4 col-sm-6">
                    <div class="shadow mc-float-card lg blue ">
                        <h3>547</h3>
                        <p>total products</p>
                        <span className="icons-bag"><GiShoppingBag /></span>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="shadow mc-float-card lg green">
                        <h3>605</h3>
                        <p>total_categories</p>
                        <span className="icons-widgets"><MdWidgets /></span>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="shadow mc-float-card lg purple">
                        <h3>249</h3>
                        <p>total_barnds</p>
                        <span class="icons-verified"><MdVerifiedUser /></span>
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
                    <table className="table table-bordered v-align">
                        <thead className='thead-dark'>
                            <tr>
                                <th>UID</th>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Rating</th>
                                <th>Order</th>
                                <th>Sales</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='mc-table-body'>
                            <tr>
                                <td className='font-weight-bold'>#1</td>
                                <td>
                                    <div className="mc-table-product md">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                                        <div className="mc-table-group">
                                            <h6>Tops and skirt set for Female</h6>
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
                                <td>
                                    <div className='d-flex align-items-center justify-content-center ratings'>
                                        <Rating name="read-only" value={4.9} max={1} readOnly size="small" />
                                        <b>4.9</b>(16)
                                    </div>
                                </td>

                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Link to='/products/details'>
                                            <Button className='secondary' color="secondary"> <FaEye /></Button>
                                        </Link>
                                        <Button className='success' color="success"> <FaPencilAlt /></Button>
                                        <Button className='error' color="error"> <MdDelete /></Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='font-weight-bold'>#1</td>
                                <td>
                                    <div className="mc-table-product md">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                                        <div className="mc-table-group">
                                            <h6>Tops and skirt set for Female</h6>
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
                                <td>
                                    <div className='d-flex align-items-center justify-content-center ratings'>
                                        <Rating name="read-only" value={4.9} max={1} readOnly size="small" />
                                        <b>4.9</b>(16)
                                    </div>
                                </td>

                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Link to='/products/details'>
                                            <Button className='secondary' color="secondary"> <FaEye /></Button>
                                        </Link>
                                        <Button className='success' color="success"> <FaPencilAlt /></Button>
                                        <Button className='error' color="error"> <MdDelete /></Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='font-weight-bold'>#1</td>
                                <td>
                                    <div className="mc-table-product md">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                                        <div className="mc-table-group">
                                            <h6>Tops and skirt set for Female</h6>
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
                                <td>
                                    <div className='d-flex align-items-center justify-content-center ratings'>
                                        <Rating name="read-only" value={4.9} max={1} readOnly size="small" />
                                        <b>4.9</b>(16)
                                    </div>
                                </td>

                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Link to='/products/details'>
                                            <Button className='secondary' color="secondary"> <FaEye /></Button>
                                        </Link>
                                        <Button className='success' color="success"> <FaPencilAlt /></Button>
                                        <Button className='error' color="error"> <MdDelete /></Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='font-weight-bold'>#1</td>
                                <td>
                                    <div className="mc-table-product md">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                                        <div className="mc-table-group">
                                            <h6>Tops and skirt set for Female</h6>
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
                                <td>
                                    <div className='d-flex align-items-center justify-content-center ratings'>
                                        <Rating name="read-only" value={4.9} max={1} readOnly size="small" />
                                        <b>4.9</b>(16)
                                    </div>
                                </td>

                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Link to='/products/details'>
                                            <Button className='secondary' color="secondary"> <FaEye /></Button>
                                        </Link>
                                        <Button className='success' color="success"> <FaPencilAlt /></Button>
                                        <Button className='error' color="error"> <MdDelete /></Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='font-weight-bold'>#1</td>
                                <td>
                                    <div className="mc-table-product md">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                                        <div className="mc-table-group">
                                            <h6>Tops and skirt set for Female</h6>
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
                                <td>
                                    <div className='d-flex align-items-center justify-content-center ratings'>
                                        <Rating name="read-only" value={4.9} max={1} readOnly size="small" />
                                        <b>4.9</b>(16)
                                    </div>
                                </td>

                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Link to='/products/details'>
                                            <Button className='secondary' color="secondary"> <FaEye /></Button>
                                        </Link>
                                        <Button className='success' color="success"> <FaPencilAlt /></Button>
                                        <Button className='error' color="error"> <MdDelete /></Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='font-weight-bold'>#1</td>
                                <td>
                                    <div className="mc-table-product md">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                                        <div className="mc-table-group">
                                            <h6>Tops and skirt set for Female</h6>
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
                                <td>
                                    <div className='d-flex align-items-center justify-content-center ratings'>
                                        <Rating name="read-only" value={4.9} max={1} readOnly size="small" />
                                        <b>4.9</b>(16)
                                    </div>
                                </td>

                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Link to='/products/details'>
                                            <Button className='secondary' color="secondary"> <FaEye /></Button>
                                        </Link>
                                        <Button className='success' color="success"> <FaPencilAlt /></Button>
                                        <Button className='error' color="error"> <MdDelete /></Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='font-weight-bold'>#1</td>
                                <td>
                                    <div className="mc-table-product md">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                                        <div className="mc-table-group">
                                            <h6>Tops and skirt set for Female</h6>
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
                                <td>
                                    <div className='d-flex align-items-center justify-content-center ratings'>
                                        <Rating name="read-only" value={4.9} max={1} readOnly size="small" />
                                        <b>4.9</b>(16)
                                    </div>
                                </td>

                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Link to='/products/details'>
                                            <Button className='secondary' color="secondary"> <FaEye /></Button>
                                        </Link>
                                        <Button className='success' color="success"> <FaPencilAlt /></Button>
                                        <Button className='error' color="error"> <MdDelete /></Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='font-weight-bold'>#1</td>
                                <td>
                                    <div className="mc-table-product md">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                                        <div className="mc-table-group">
                                            <h6>Tops and skirt set for Female</h6>
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
                                <td>
                                    <div className='d-flex align-items-center justify-content-center ratings'>
                                        <Rating name="read-only" value={4.9} max={1} readOnly size="small" />
                                        <b>4.9</b>(16)
                                    </div>
                                </td>

                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Link to='/products/details'>
                                            <Button className='secondary' color="secondary"> <FaEye /></Button>
                                        </Link>
                                        <Button className='success' color="success"> <FaPencilAlt /></Button>
                                        <Button className='error' color="error"> <MdDelete /></Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='font-weight-bold'>#1</td>
                                <td>
                                    <div className="mc-table-product md">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                                        <div className="mc-table-group">
                                            <h6>Tops and skirt set for Female</h6>
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
                                <td>
                                    <div className='d-flex align-items-center justify-content-center ratings'>
                                        <Rating name="read-only" value={4.9} max={1} readOnly size="small" />
                                        <b>4.9</b>(16)
                                    </div>
                                </td>

                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Link to='/products/details'>
                                            <Button className='secondary' color="secondary"> <FaEye /></Button>
                                        </Link>
                                        <Button className='success' color="success"> <FaPencilAlt /></Button>
                                        <Button className='error' color="error"> <MdDelete /></Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='font-weight-bold'>#1</td>
                                <td>
                                    <div className="mc-table-product md">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                                        <div className="mc-table-group">
                                            <h6>Tops and skirt set for Female</h6>
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
                                <td>
                                    <div className='d-flex align-items-center justify-content-center ratings'>
                                        <Rating name="read-only" value={4.9} max={1} readOnly size="small" />
                                        <b>4.9</b>(16)
                                    </div>
                                </td>

                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex align-items-center">
                                        <Link to='/products/details'>
                                            <Button className='secondary' color="secondary"> <FaEye /></Button>
                                        </Link>
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
        </div>

    );
};

export default ProductList;