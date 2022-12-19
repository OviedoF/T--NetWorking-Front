import React from 'react';
import CommentsSection from '../components/home/comments/CommentsSection';
import ContactContainer from '../components/home/contact/ContactContainer';
import HeroCardsRenderer from '../components/home/hero-cards/HeroCardsRenderer';
import SliderHome from '../components/home/hero-slider/SliderHome';
import HomeHowItWorksRenderer from '../components/home/how-it-works/HomeHowItWorksRenderer';
import ProductsContainer from '../components/home/products/ProductsContainer';

const Home = () => {
    return (
        <div>
            <SliderHome />
            <HeroCardsRenderer />
            <HomeHowItWorksRenderer />
            <ProductsContainer />
            <CommentsSection />
            <ContactContainer />
        </div>
    );
}

export default Home;
