import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Catgories from '../components/Catgories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Catgories />
        <Products />
        <Newsletter />
        <Footer />
        </div>
  )
}

export default Home