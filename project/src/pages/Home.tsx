import React from 'react'
import HeroSection from '../components/HeroSection'
import CompanySection from '../components/CompanySection'
import CategoriesSection from '../components/CategoriesSection'
import FeaturedSection from '../components/FeaturedSection'
import WhyChooseUs from '../components/WhyChooseUs'
import ProductSection from '../components/ProductSection'
import BannerSection from '../components/BannerSection'
import Highlights from '../components/Highlights'
import FeaturedProductSection from '../components/FeaturedProductSection'
import NewsletterSection from '../components/NewsLetterSection'
import { Helmet } from 'react-helmet-async'
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Top Mobile Charger Manufacturers in Delhi | Best Projectors & Currency Counting Machines</title>
        <meta name="description" content="Discover premium mobile chargers, Bluetooth speakers, hands-free devices, power banks & more at MyraDigital—Delhi's trusted manufacturer for high-quality mobile accessories and electronic gadgets." />
        <meta property="og:title" content="Top Mobile Charger Manufacturers in Delhi | Best Projectors & Currency Counting Machines" />
        <meta property="og:description" content="Shop top-quality mobile chargers, Bluetooth speakers, power banks & more at MyraDigital. Your one-stop destination for cutting-edge mobile accessories and electronic devices in Delhi." />
        <meta property="og:image" content="https://www.myra-digital.com/images/preview-image.jpg" />
        <meta property="og:url" content="https://www.myra-digital.com/" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="mobile charger manufacturers Delhi, best mobile chargers, Bluetooth speakers, hands-free devices, power banks, electronic gadgets, projectors, currency counting machines" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.myra-digital.com/" />
      </Helmet>

      <div className='bg-white'>
        <HeroSection />
        <CompanySection />
        <CategoriesSection />
        <FeaturedSection />
        <WhyChooseUs />
        <ProductSection />
        <BannerSection />
        <Highlights />
        <FeaturedProductSection />
        <NewsletterSection />
      </div>
    </>
  )
}

export default Home