import React from 'react';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;