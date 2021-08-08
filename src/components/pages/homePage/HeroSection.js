import  {Button} from '../../common/Button';
import React from 'react';
import './HeroSection.css';
const HeroSection = () => {
    return (
        <div className='hero-container'>
            {/* <div className="Navbar">
                <Navbar></Navbar>
            </div> */}
            {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
            <div className="hero-text">
                <h3>MINORITY PROGRAMMERS ASSOCIATION</h3>
                <p><i>Code, Culture, and Community.</i></p>
            </div>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button> &nbsp;
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;