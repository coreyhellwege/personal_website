import React from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { ContactForm } from '../../container'
import './Footer.scss'

const Footer = () => {
    return <>
        <h2 className='head-text'>Get in touch</h2>
        <div className='app__footer-cards'>
            <div className='app__footer-card'>
                <img src={images.email} alt='email' />
                <a href='mailto:coreyhellwege@gmail.com' className='p-text'>coreyhellwege@gmail.com</a>
            </div>
        </div>
        <div className='copyright'>
            <p className='p-text'>@2022 Corey Hellwege</p>
            <p className='p-text'>All rights reserved</p>
        </div>
        <ContactForm />
    </>
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg')