/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../components/SliderData'

const Aboutus2 = () => {
  return (
    <div>
            <header className='masthead'>
  <ImageSlider slides={SliderData} />
  <p className='masthead-intro'>Hi We're </p>
  <h1 className='masthead-heading'>The Shelf Store</h1>
</header>
<section className="introduction-section">
    <h1>Introduction</h1>
    <p>I am a construction business owner, part time marketer, and soon to be web developer.</p>
    <p>I love the internet, technology, and building beautiful things.</p>
</section>
<section className="location-section">
    <h1>Where I'm From</h1>
    <p>I'm originally from Toronto, Ontario. </p>
</section>
<section className="questions-section">
    <h1>More About Me</h1>
    <h2>What are your favorite hobbies?</h2>
    <p>My favorite hobby is building things on the internet like ecommerce sites and email marketing campaigns.</p>
    <h2>What's your dream job?</h2>
    <p>My dream job is similar to my current job except I would like to be building software instead of buildings.</p>
    <h2>Where do you live?</h2>
    <p>I live on a rural acreage, but I'm close to Ottawa and Montreal.</p>
    <h2>Why do you want to be a web developer?</h2>
    <p>Because programming is awesome and programming for the internet is even more awesome.</p>
</section>

<footer className="content-footer">
    <p>Say hi to me on these social networks:</p>
    <ul className="social">
        <li><a className="css-is-deranged" href="_INSERT_GITHUB_URL_HERE_">GitHub</a></li>
        <li><a className="css-is-deranged" href="_INSERT_TWITTER_URL_HERE_">Twitter</a></li>
        <li><a className="css-is-deranged" href="_INSERT_GOOGLE+_URL_HERE_">Google+</a></li>
    </ul>
  
</footer>
    </div>
  )
}

export default Aboutus2