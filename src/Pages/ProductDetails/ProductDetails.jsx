import React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import Slider from "react-slick";
import './ProductDetails.css'
import { MdBrandingWatermark } from 'react-icons/md';
import { BiSolidCategoryAlt } from 'react-icons/bi';



//bredcrumb

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

const ProductDetails = () => {

    var productSliderOption = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    var productSliderSmlOption = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <>
            <div className='right-content w-100'>
                <div className='card shadow border-0 w-100 flex-row p-4'>
                    <h5 className="mb-0">Product View</h5>
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
                            label="Products View"
                        />
                    </Breadcrumbs>
                </div>

                <div className="card productDetailsSection">

                    <div className="row">
                        <div className="col-md-5">
                            <div className="sliderWrapper pt-3 pb-3  pl-4 pr-4">
                                <h6 className='mb-4'>Product Gallery</h6>
                                <Slider {...productSliderOption} className='sliderBig mb-2'>
                                    <div className='item'>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt="" className='w-100' />
                                    </div>
                                </Slider>
                                <Slider {...productSliderSmlOption} className='sliderSmall'>
                                    <div className='item'>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp" alt="" className='w-100' />
                                    </div>
                                    <div className='item'>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp" alt="" className='w-100' />
                                    </div>
                                    <div className='item'>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp" alt="" className='w-100' />
                                    </div>
                                    <div className='item'>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp" alt="" className='w-100' />
                                    </div>
                                    <div className='item'>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt="" className='w-100' />
                                    </div>

                                </Slider>
                            </div>

                        </div>
                        <div className="col-md-7">

                            <div className="sliderWrapper pt-3 pb-3  pl-4 pr-4">
                                <h6 className='mb-4'>Product Details</h6>
                                <h4>Formal suits for men wedding slim fit 3 piece dress business party jacket</h4>

                                <div className="productInfo mt-3">
                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><MdBrandingWatermark /></span>
                                            <span className="name">Brand</span>
                                        </div>
                                        <div className="col-sm-9">
                                            :<span>Ecstasy</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><BiSolidCategoryAlt /></span>
                                            <span className="name">Category</span>
                                        </div>
                                        <div className="col-sm-9">
                                            :<span>Man's</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><BiSolidCategoryAlt /></span>
                                            <span className="name">Tags</span>
                                        </div>
                                        <div className="col-sm-9">
                                            :<span>
                                                <ul className="list list-inline tags sml">
                                                    <li className="list-inline-item">
                                                        <span>SUITE</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>PARTY</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>DRESS</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>MAN</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>SMART</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>STYLES</span>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><BiSolidCategoryAlt /></span>
                                            <span className="name">Color</span>
                                        </div>
                                        <div className="col-sm-9">
                                            :<span>
                                                <ul className="list list-inline tags sml">
                                                    <li className="list-inline-item">
                                                        <span>RED</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>BLUE</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>GREEN</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>YELLOW</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>PURPLE</span>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><BiSolidCategoryAlt /></span>
                                            <span className="name">Size</span>
                                        </div>
                                        <div className="col-sm-9">
                                            :<span>
                                                <ul className="list list-inline tags sml">
                                                    <li className="list-inline-item">
                                                        <span>SM</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>MD</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>LG</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>XL</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span>XXL</span>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><BiSolidCategoryAlt /></span>
                                            <span className="name">Price</span>
                                        </div>
                                        <div className="col-sm-9">
                                            :<span>
                                                <div className='d-flex align-items-start tags'>
                                                    <span className='pr-3'>$37.00</span>
                                                    <del>$42.00</del>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><BiSolidCategoryAlt /></span>
                                            <span className="name">Stock</span>
                                        </div>
                                        <div className="col-sm-9">
                                            :<span>(68) Piece</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><BiSolidCategoryAlt /></span>
                                            <span className="name">Review</span>
                                        </div>
                                        <div className="col-sm-9">
                                            :<span>(03) Review</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className="icon"><BiSolidCategoryAlt /></span>
                                            <span className="name">Published</span>
                                        </div>
                                        <div className="col-sm-9">
                                            :<span>02 Feb 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <h4 className='mt-4'>Product Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit repellendus expedita esse cupiditate quos doloremque rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam debitis amet natus doloremque laudantium? Repudiandae, consequuntur, officiis quidem quo deleniti, autem non laudantium sequi error molestiae ducimus accusamus facere velit consectetur vero dolore natus nihil temporibus aspernatur quia consequatur? Consequuntur voluptate deserunt repellat tenetur debitis molestiae doloribus dicta. In rem illum dolorem atque ratione voluptates asperiores maxime doloremque laudantium magni neque ad quae quos quidem, quaerat rerum ducimus blanditiis reiciendis</p>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;