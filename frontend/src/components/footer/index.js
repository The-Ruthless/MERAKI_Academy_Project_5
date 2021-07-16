import React from 'react';
import './footer.css'
import {FaFacebookSquare,FaTwitterSquare,FaLinkedin,FaGooglePlusSquare,FaInstagramSquare} from 'react-icons/fa';
import {MdLocationOn,MdCall,MdMail} from 'react-icons/md';
import logo from "./logo.gif";



const Footer = () => {
	return <div className="footer">
		
		<div id="footer_about">
			<p id="about_text">About The Company</p>
			<p id="about_para">The Ruthless.com  is the leading classifieds website for users in Jordan .
			 Its has become the number one platform for users to buy, sell, or find anything in their community.
			  </p>

			<div id="footerIcons">
				<FaFacebookSquare className="footer_icon" />
				<FaTwitterSquare className="footer_icon" />
				<FaLinkedin className="footer_icon" />
				<FaGooglePlusSquare className="footer_icon" />
				<FaInstagramSquare className="footer_icon" />
			</div>

		</div>


		<div id="footer_info">

			<div className="footerInfo">
				<MdLocationOn className="footer_info_icon" />
				<p className="footer_info_text">Al Zarqa - Jordan</p>
			</div>

			<div className="footerInfo">
			 <MdCall className="footer_info_icon" />
				<p className="footer_info_text" >+96278949818</p>
			</div>

			<div className="footerInfo">
			 <MdMail className="footer_info_icon" />
				<p className="footer_info_text" >THERUTHLESS.COM</p>
			</div>







		</div>



		<div id="footer_logo">

             <div id="footer_logo_text">


				 <p>THE RUTHLESS</p>

				 <p>Home | About | Services | Portfolio | Contact</p>

				 <p style={{fontSize:"16px"}}>The Ruthless © 2021</p>





			 </div>






			<img
              id="logo_footer"
              width="175"
              height="175"
              src={logo}
              alt="loading..."
            />







		</div>
		
		
		
		
		
		
		
		
		
		
		</div>;
};

export default Footer;
