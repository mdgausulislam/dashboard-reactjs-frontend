import React, { useState } from 'react';
import './ProductUpload.css'
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from 'react-icons/fa';



const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});


const ProductUpload = () => {

    const [categoryVal, setCategoryVal] = useState('');
    const [brandVal, setBrandVal] = useState('');
    const [ratingsValue, setRatingsValue] = useState(1);

    const handleChangeCategory = (event) => {
        setCategoryVal(event.target.value);
    };
    const handleChangeBrand = (event) => {
        setBrandVal(event.target.value);
    };

    return (
        <div className='right-content w-100'>
            <div className='card shadow border-0 w-100 flex-row p-4'>
                <h5 className="mb-0">Product Upload</h5>
                <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                    <StyledBreadcrumb
                        component="a"
                        href="#"
                        label="DashBoard"
                        icon={<HomeIcon fontSize="small" />}
                    />
                    <StyledBreadcrumb
                        component="a"
                        href="#"
                        label="Products"
                    />
                    <StyledBreadcrumb
                        label="Product Upload"
                    />
                </Breadcrumbs>
            </div>
            <form action="" className='form'>

                <div className="row">
                    <div className="col-sm-7">
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
                            <br />
                            <Button className='btn-blue btn-lg btn-big pr2'><FaCloudUploadAlt /> PUBLISH AND VIEW</Button>
                        </div>

                    </div>

                    <div className="col-sm-5">

                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProductUpload;