import React from 'react';
import Carousel from 'react-material-ui-carousel';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';
const HomeBanner = () => {
    return (
        <div>
            <Carousel>
                <img style={{ width: '100%', height: '80%' }} src={banner1} alt="" />
                <img style={{ width: '100%', height: '80%' }} src={banner2} alt="" />
                <img style={{ width: '100%', height: '80%' }} src={banner3} alt="" />
            </Carousel>


        </div>
    );
};

export default HomeBanner;