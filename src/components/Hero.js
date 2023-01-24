import React from 'react'
import PixelMe from '../images/Pixel_Me.png'
import { useGlobalContext } from '../context'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { GiFallingStar } from 'react-icons/gi'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()
  return (
    <section className='section hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-image'>
          <img src={PixelMe} className='headshot-img' alt='head shot' />
        </article>
        <article className='hero-info'>
          <div className='hero-tagline'>
            <GiFallingStar className='hero-icon' />
            <h2>Web Developer</h2>
          </div>
          <div className='hero-tagline'>
            <GiFallingStar className='hero-icon' />
            <h2>Problem Solver</h2>
          </div>
          <div className='hero-tagline'>
            <GiFallingStar className='hero-icon' />
            <h2>Expert Googler</h2>
          </div>
        </article>
      </div>
      <div className='footer'>
        <p>Copyright &#169; 2021 Lisa Trevis.</p>
        <p>All rights reserved.</p>
      </div>
    </section>
  )
}

export default Hero
