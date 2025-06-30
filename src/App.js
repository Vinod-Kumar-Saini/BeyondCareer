// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AboutSection from './sections/About/Abouts';
import ContactSection from './sections/Contact/ContactSections';
import HeroSection from './sections/Hero/HeroSection';
import ServicesSection from './sections/Service/ServiceSection';
import TestimonialSection from './sections/TestimonialsSection/TestimonialSection';

import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <TestimonialSection/>
      <ContactSection/>
      <Footer/>
      <Analytics/>
    </div>
  );
}

export default App;
