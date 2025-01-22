import React from 'react';
import SectionsHead from '../components/common/SectionsHead';
import Services from '../components/common/Services';
import TopProducts from '../components/product/TopProducts';
import FeaturedSlider from '../components/sliders/FeaturedSlider';
import HeroSlider from '../components/sliders/HeroSlider';


const Home = () => {

    return (
        <main>
            <section id="hero">
                <HeroSlider />
            </section>

            <section id="featured" className="section">
                <div className="container">
                    <SectionsHead heading="Featured Products" />
                    <FeaturedSlider />
                </div>
            </section>

            <section id="products" className="section">
                <div className="container">
                    <SectionsHead heading="Top Products" />
                    <TopProducts />
                </div>
            </section>

            <Services />
        </main>
    );
};

export default Home;;