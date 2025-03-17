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
const Home = () => {
  return (
    <>
    <div className='bg-white'>
    <HeroSection/>
    <CompanySection/>
    <CategoriesSection/>
    <FeaturedSection/>
    <WhyChooseUs/>
    <ProductSection/>
    <BannerSection/>
    <Highlights/>
    <FeaturedProductSection/>
    <NewsletterSection/>
    </div>
    </>
  )
}

export default Home