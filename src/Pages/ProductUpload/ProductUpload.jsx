import React, { useState } from 'react';
import './ProductUpload.css'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdCollections } from 'react-icons/md';
import { HiDotsVertical } from 'react-icons/hi';
import Menu from '@mui/material/Menu';
import { IoIosTimer } from 'react-icons/io';
import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs';


const breadcrumbData = [
    { label: 'DashBoard', href: '#', icon: true },
    { label: 'Products', href: '#' },
    { label: 'Product Upload' },
];


const ProductUpload = () => {

    const [categoryVal, setCategoryVal] = useState('');
    const [brandVal, setBrandVal] = useState('');
    const [ratingsValue, setRatingsValue] = useState(1);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const ITEM_HEIGHT = 48;

    const handleChangeCategory = (event) => {
        setCategoryVal(event.target.value);
    };
    const handleChangeBrand = (event) => {
        setBrandVal(event.target.value);
    };

    return (
        <div className='right-content w-100'>
            <BreadCrumbs title="Product Upload" breadcrumbs={breadcrumbData} />
            <form action="" className='form'>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card p-4">
                            <h5 className='mb-4'>Basic Information</h5>
                            <div className="form-group">
                                <h6>Title</h6>
                                <input type="text" placeholder='type here...' />
                            </div>
                            <div className="form-group">
                                <h6>DESCRIPTION</h6>
                                <textarea rows={5} cols={10} placeholder='type here...' />
                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <h6>CATEGORY</h6>
                                        <Select
                                            value={categoryVal}
                                            onChange={handleChangeCategory}
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
                                    </div>

                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <h6>BRAND</h6>
                                        <Select
                                            value={brandVal}
                                            onChange={handleChangeBrand}
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
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <h6>REGULAR PRICE</h6>
                                        <input type="text" placeholder='type here...' />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <h6>DISCOUNT PRICE</h6>
                                        <input type="text" placeholder='type here...' />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <h6>SHIPPING FEE</h6>
                                        <input type="text" placeholder='type here...' />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <h6>TAX RATE</h6>
                                        <input type="text" placeholder='type here...' />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <h6>RATINGS</h6>
                                        <Rating
                                            name="simple-controlled"
                                            value={ratingsValue}
                                            onChange={(event, newValue) => {
                                                setRatingsValue(newValue);
                                            }} />

                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <h6>PRODUCT STOCK</h6>
                                        <input type="text" placeholder='type here...' />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <h6>Tags</h6>
                                <textarea rows={5} cols={10} placeholder='type here...' />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card p-4">
                    <div class="mc-card-header">
                        <h4 class="mc-card-title">Media and Published</h4>
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

                    <div class="mc-product-upload-media">
                        <div class="mc-product-upload-image">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt="product" />
                        </div>
                        <div class="mc-product-upload-image">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp" alt="product" />
                        </div>
                        <div class="mc-product-upload-image">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp" alt="product" />
                        </div>
                        <div class="mc-product-upload-image">
                            <img src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp" alt="product" />
                        </div>
                        <div class="mc-product-upload-file">
                            <input type="file" id="product" />
                            <label for="product"><span class="material-icons"><MdCollections /></span>
                                <span>IMG_20210826_194819.jpg</span>
                            </label>
                        </div>
                    </div>
                    <Button className='btn-blue btn-lg btn-big pr-2 mt-4'><FaCloudUploadAlt /> PUBLISH AND VIEW</Button>
                </div>
            </form>
        </div>
    );
};

export default ProductUpload;