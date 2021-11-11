import React from 'react';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
import Contact from '../Contact/Contact';
import HomeBanner from '../HomeBanner/HomeBanner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <Products></Products>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;