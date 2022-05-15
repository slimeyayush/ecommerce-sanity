
import React from 'react';
import { AiFillInstagram, AiOutlineTwitter,AiOutlineWhatsApp} from 'react-icons/ai';
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 The Shelf Store All rights reserverd</p>
      <p className="icons">
        <Link href='https://www.instagram.com/theshelfofficial/'>
        <AiFillInstagram  />
        </Link>
        
        <AiOutlineTwitter />
        <Link href=" https://wa.me/8920498242" >
        <AiOutlineWhatsApp  />
        </Link>
        
      </p>
    </div>
  )
}

export default Footer