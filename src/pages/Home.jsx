import React from 'react';
import Anoucement from '../components/home/anoucement/Anoucement';
import BrandsSection from '../components/home/brands/BrandsSection';
import CommentsSection from '../components/home/comments/CommentsSection';
import ContactContainer from '../components/home/contact/ContactContainer';
import HeroCardsRenderer from '../components/home/hero-cards/HeroCardsRenderer';
import SliderHome from '../components/home/hero-slider/SliderHome';
import HomeHowItWorksRenderer from '../components/home/how-it-works/HomeHowItWorksRenderer';
import ProductsContainer from '../components/home/products/ProductsContainer';
import StepsSection from '../components/home/steps/StepsSection';

const Home = () => {
    return (
        <div>
            <SliderHome />
            <HeroCardsRenderer />
            <ProductsContainer />
            <Anoucement />
            <StepsSection />
            <CommentsSection />
            <BrandsSection />
            <ContactContainer />
        </div>
    );
}

export default Home;
