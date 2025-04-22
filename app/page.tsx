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

// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
// export const metadata = {
//   title: 'Learn4All',
//   description: 'An Indian learning platform for students with low-end PCs, providing free courses, rental PCs, and an opportunity to teach and earn.',
// };
// export const dynamic = 'force-dynamic';
// export const revalidate = 0;
// export const runtime = 'edge';

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
