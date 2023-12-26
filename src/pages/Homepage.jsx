import React from 'react';
import SubscribeWidget from '../components/SubscribeWidget/SubscribeWidget';
import mail from '../assets/img/icon/EnvelopeSimple.svg';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import BannerMushroom from '../components/BannerMushroom/BannerMushroom';
import TopCreators from '../components/TopCreators/TopCreators';
import Hero from '../components/Hero/Hero';

const Homepage = (props) => {
    return (
        <div>
            <Hero />
            <TopCreators hp={true} />
            <BannerMushroom />
            <HowItWorks />
            <SubscribeWidget icon={mail} />
        </div>
    );
};

export default Homepage;
