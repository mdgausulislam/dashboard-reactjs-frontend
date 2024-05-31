import React, { useRef } from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import Slider from "react-slick";
import './ProductDetails.css'
import { MdBrandingWatermark } from 'react-icons/md';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import UserAvatar from '../UserAvatar/UserAvatar';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { FaReply } from 'react-icons/fa';


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

    const productSliderBig = useRef()
    const productSliderSml = useRef()

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

    const goToSlide = (index) => {
        productSliderBig.current.slickGoTo(index)
        productSliderSml.current.slickGoTo(index)
    }

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
                            <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                                <h6 className='mb-4'>Product Gallery</h6>
                                <Slider {...productSliderOption} ref={productSliderBig} className='sliderBig mb-2'>
                                    <div className='item'>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt="" className='w-100' />
                                    </div>
                                    <div className='item'>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt="" className='w-100' />
                                    </div>
                                    <div className='item'>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt="" className='w-100' />
                                    </div>
                                    <div className='item'>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt="" className='w-100' />
                                    </div>
                                    <div className='item'>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt="" className='w-100' />
                                    </div>
                                </Slider>
                                <Slider {...productSliderSmlOption} ref={productSliderSml} className='sliderSmall'>
                                    <div className='item' onClick={() => goToSlide(1)}>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp" alt="" className='w-100' />
                                    </div>
                                    <div className='item' onClick={() => goToSlide(2)}>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp" alt="" className='w-100' />
                                    </div>
                                    <div className='item' onClick={() => goToSlide(3)}>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp" alt="" className='w-100' />
                                    </div>
                                    <div className='item' onClick={() => goToSlide(4)}>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp" alt="" className='w-100' />
                                    </div>
                                    <div className='item' onClick={() => goToSlide(5)}>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt="" className='w-100' />
                                    </div>

                                </Slider>
                            </div>

                        </div>
                        <div className="col-md-7">

                            <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                                <h6 className='mb-4'>Product Details</h6>
                                <h4>Formal suits for men wedding slim fit 3 piece dress business party jacket</h4>

                                <div className="productInfo mt-4">
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

                    <div className="p-4">
                        <h6 className='mt-4 mb-4'>Product Description</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit repellendus expedita esse cupiditate quos doloremque rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam debitis amet natus doloremque laudantium? Repudiandae, consequuntur, officiis quidem quo deleniti, autem non laudantium sequi error molestiae ducimus accusamus facere velit consectetur vero dolore natus nihil temporibus aspernatur quia consequatur? Consequuntur voluptate deserunt repellat tenetur debitis molestiae doloribus dicta. In rem illum dolorem atque ratione voluptates asperiores maxime doloremque laudantium magni neque ad quae quos quidem, quaerat rerum ducimus blanditiis reiciendis</p>

                        <br />

                        <h6 className='mt-4 mb-3'>Rating Analytics</h6>
                        <div className="ratingSection">
                            <div className="row d-flex align-items-center justify-content-center">
                                <div className="col-md-6">
                                    <div className="ratingRow d-flex align-items-center">
                                        <span className="col1">
                                            5 Star
                                        </span>
                                        <div className="col2">
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: "70%" }}></div>
                                            </div>
                                        </div>

                                        <span className="col3">
                                            (22)
                                        </span>
                                    </div>
                                    <div className="ratingRow d-flex align-items-center">
                                        <span className="col1">
                                            4 Star
                                        </span>
                                        <div className="col2">
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: "60%" }}></div>
                                            </div>
                                        </div>

                                        <span className="col3">
                                            (6)
                                        </span>
                                    </div>
                                    <div className="ratingRow d-flex align-items-center">
                                        <span className="col1">
                                            3 Star
                                        </span>
                                        <div className="col2">
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: "30%" }}></div>
                                            </div>
                                        </div>

                                        <span className="col3">
                                            (5)
                                        </span>
                                    </div>
                                    <div className="ratingRow d-flex align-items-center">
                                        <span className="col1">
                                            2 Star
                                        </span>
                                        <div className="col2">
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: "20%" }}></div>
                                            </div>
                                        </div>

                                        <span className="col3">
                                            (3)
                                        </span>
                                    </div>
                                    <div className="ratingRow d-flex align-items-center">
                                        <span className="col1">
                                            1 Star
                                        </span>
                                        <div className="col2">
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: "10%" }}></div>
                                            </div>
                                        </div>

                                        <span className="col3">
                                            (2)
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {/* <div className="ratingRow d-flex align-items-center">
                                       
                                    </div> */}

                                    <div class="mc-review-analytics-detail-group"><h3 class="mc-review-analytics-total">total review (38)</h3><h4 class="mc-review-analytics-score">4.9</h4>
                                        <div class="mc-review-analytics-star">
                                            <Rating name="read-only" value={4.6} readOnly precision={0.2} size='small' className='custom-rating'/>
                                        </div>
                                        <p class="mc-review-analytics-text">your average rating star</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br />
                        <h6 className='mt-4 mb-3'>Customer_reviews</h6>
                        <div className="reviewsSection">
                            <div className="reviewsRow">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvatar img={'https://mironcoder-hotash.netlify.app/images/avatar/01.webp'} lg={true} />

                                                <div className="info pl-3">
                                                    <h6>Miron Mahmud</h6>
                                                    <span>25 minutes ago!</span>
                                                </div>
                                            </div>
                                            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" className="custom-rating" />
                                        </div>
                                    </div>
                                    <div className="col-sm-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className='btn-blue btn-lg ml-auto btn-big'><FaReply /> Reply</Button>
                                        </div>
                                    </div>
                                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                                </div>
                            </div>

                            <div className="reviewsRow reply">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvatar img={'https://mironcoder-hotash.netlify.app/images/avatar/01.webp'} lg={true} />

                                                <div className="info pl-3">
                                                    <h6>Miron Mahmud</h6>
                                                    <span>25 minutes ago!</span>
                                                </div>
                                            </div>


                                            <Rating name="read-only" value={3} readOnly precision={0.5} size="small" className="custom-rating" />

                                        </div>
                                    </div>
                                    <div className="col-sm-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className='btn-blue btn-lg ml-auto btn-big'><FaReply /> Reply</Button>
                                        </div>
                                    </div>
                                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                                </div>
                            </div>

                            <div className="reviewsRow reply">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvatar img={'https://mironcoder-hotash.netlify.app/images/avatar/01.webp'} lg={true} />

                                                <div className="info pl-3">
                                                    <h6>Miron Mahmud</h6>
                                                    <span>25 minutes ago!</span>
                                                </div>
                                            </div>
                                            <Rating name="read-only" value={4} readOnly precision={0.5} size="small" className="custom-rating" />
                                        </div>
                                    </div>
                                    <div className="col-sm-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className='btn-blue btn-lg ml-auto btn-big'><FaReply /> Reply</Button>
                                        </div>
                                    </div>
                                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                                </div>
                            </div>

                            <div className="reviewsRow">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvatar img={'https://mironcoder-hotash.netlify.app/images/avatar/01.webp'} lg={true} />

                                                <div className="info pl-3">
                                                    <h6>Miron Mahmud</h6>
                                                    <span>25 minutes ago!</span>
                                                </div>
                                            </div>
                                            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" className="custom-rating" />
                                        </div>
                                    </div>
                                    <div className="col-sm-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                            <Button className='btn-blue btn-lg ml-auto btn-big'><FaReply /> Reply</Button>
                                        </div>
                                    </div>
                                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                                </div>
                            </div>

                            <div className="reviewsForm">
                                <h6 className='mt-4 mb-3'>Review Reply Form</h6>
                                <form action="" className="reviewForm">
                                    <textarea placeholder='Write here' />

                                    <Button className='w-100 btn-blue btn-lg btn-big mt-4'>Drop your replies</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;