import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import DoctorsSection from '../components/home/DoctorsSection';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import StatsSection from '../components/home/StatsSection';
import AppointmentSection from '../components/home/AppointmentSection';
import CTASection from '../components/home/CTASection';
import InsuranceSection from '../components/home/InsuranceSection';
import VideoBlogsSection from '../components/home/VideoBlogsSection';
import { SEO_DEFAULTS } from '../utils/constants';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{SEO_DEFAULTS.title}</title>
        <meta name="description" content={SEO_DEFAULTS.description} />
        <meta name="keywords" content={SEO_DEFAULTS.keywords} />
        <meta property="og:title" content={SEO_DEFAULTS.title} />
        <meta property="og:description" content={SEO_DEFAULTS.description} />
        <meta property="og:image" content={SEO_DEFAULTS.image} />
        <meta property="og:url" content={SEO_DEFAULTS.url} />
        <link rel="canonical" href={SEO_DEFAULTS.url} />
      </Helmet>

      <div className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <InsuranceSection />
        <AppointmentSection />
        <DoctorsSection />
        <TestimonialsSection />
        <CTASection />
        <VideoBlogsSection />
      </div>
    </>
  );
};

export default Home;