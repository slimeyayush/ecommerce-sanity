import React from 'react'
import {AiOutlineWhatsApp,AiOutlineInstagram} from 'react-icons/ai'
import Link from 'next/link'

function Contact() {
  return (
    <div>
       <Link href="https://www.instagram.com/theshelfofficial/">
       <AiOutlineInstagram />
       
       </Link>
       <Link href=" https://wa.me/8920498242" >
        <AiOutlineWhatsApp  />
        </Link>
      
    </div>
  )
}

export default Contact