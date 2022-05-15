import React from 'react'
import Link from 'next/link'

const Aboutus = () => {
  return (
    
        <div className="section">
		<div className="container">
			<div className="content-section">
				<div className="title">
					<h1>About Us</h1>
				</div>
				<div className="content">
					<h3>Ceramic|Sustainable|Purposeful</h3>
					<p>Check Out Our Latest Collection Of Ceremic Products brought to you by The Shelf </p>
					<div className="button">
						<Link href = './Aboutus2'>Read More</Link>
					</div>
				</div>
				<div className="social">
			
				</div>
			</div>
			
		</div>
	</div>
    
  )
}

export default Aboutus