
import React from 'react';
import img from '../../images/404.png'
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
const NotFound = () => {
    return (
        <div>
            <Navigation></Navigation>
            <img src={img} style={{ height: '100vh', width: '100vw' }} alt="" srcset="" />
            <Footer></Footer>
        </div>);
};

export default NotFound;