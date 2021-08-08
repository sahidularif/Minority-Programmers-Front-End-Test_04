import React from 'react';
import heroImage from '../../../images/heroImage.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../common/common.css';
import Navbar from '../../common/Navbar';
import HeroSection from './HeroSection';
const HomePage = () => {
    return (
        <>
            <Navbar/>
            <HeroSection/>
        </>
    );
};

export default HomePage;