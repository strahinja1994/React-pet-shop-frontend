import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {

    const iconStyle = {
        fontSize: "60px",
        color: "#ffffff",
        padding: "10px"
    }

    return(
        <footer className='footer'>
            <h1 className='footer__title'>Contacts:</h1>
            <div className='footer__icons'>
                <a href="#" className='footer__icons-link'>
                    <FacebookIcon className='footer__icons-icon'style={iconStyle} />
                </a>
                <a href="#" className='footer__icons-link'>
                    <InstagramIcon className='footer__icons-icon'style={iconStyle} />
                </a>
                <a href="#" className='footer__icons-link'>
                    <TwitterIcon className='footer__icons-icon'style={iconStyle} />
                </a>
                <a href="#" className='footer__icons-link'>
                    <LinkedInIcon className='footer__icons-icon'style={iconStyle} />
                </a>
            </div>
        </footer>
    )
}