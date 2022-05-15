import React from 'react'
import FooterBanner from '../components/FooterBanner'
import HeroBanner from '../components/HeroBanner'
import { client } from '../lib/client'
import Product from '../components/Product'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aboutus from './Aboutus'
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../components/SliderData'
import Aboutus3 from './Aboutus3'




const index = ({products,bannerData}) => {
  return (
    <div>
    
    
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <ImageSlider slides={SliderData} />
    <Aboutus />
    <div className="products-heading">
      <h2>Our Products</h2>
      <p>Enhance Your Home with our modern designs</p>
    </div>
    
    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
    <Aboutus3 />

     
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
    
    </div>
  )
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  
}
}


export default index