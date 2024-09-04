import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instgram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='footer-icon'>
        <img src={facebook_icon} alt=''/>
        <img src={youtube_icon} alt=''/>
        <img src={instgram_icon} alt=''/>
        <img src={twitter_icon} alt=''/>
      </div>
      <ul>
        <li>Audio Dec</li>
        <li>Help Center</li>
        <li>Gift Card</li>
        <li>Media center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Term Of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preference</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>@ 1997-2023 Netflix,Inc.</p>
    </div>
      
    </>
  )
}

export default Footer
