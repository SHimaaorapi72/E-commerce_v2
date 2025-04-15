import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import PolicySection from '../components/PolicySection'
import NewsLetterBox from './../components/NewsLetterBox';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <PolicySection />
      <NewsLetterBox />
    </div>
  )
}

export default Home
