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
            <h2>UI/UX Engineer</h2>
          </div>
        </article>
      </div>
      <div className='footer'>
        <p>Copyright &#169; 2021 Lisa Trevis.</p>
        <p>All rights reserved.</p>
        <div className='pixel'>
          <p>Logo pixel art by Glenn Brooks</p>
          <a href='https://www.instagram.com/terderrer'>
            <FaInstagram className='icon' />
          </a>
          <a href='https://twitter.com/terderrer'>
            <FaTwitter className='icon' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
