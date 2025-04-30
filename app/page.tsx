import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CommunityMessage from './components/CommunityMessage';
import FooterSection from './components/Footer';
import AboutSection from './components/aboutSection';
import { FaArrowRight, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

import ProductSection from './components/ProductSection';
import PressSection from './components/pressSection';
import ContactSection from './components/ContactSection';
import './globals.css';
import MotionWrapper from './components/MotionWrapper';
import Navbar from './components/Navbar';



const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
     <MotionWrapper>
      <Navbar/>
      <HeroSection />
       <AboutSection/>
      <ProductSection/>
     <PressSection/>
     <ContactSection/> 
     </MotionWrapper>
    </main>
    
  );
};

export default Home;
