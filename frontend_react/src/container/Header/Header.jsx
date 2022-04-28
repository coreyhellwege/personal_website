import React from 'react'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import { images } from '../../constants'
import './Header.scss'

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = ({ theme }) => {
    return <div className='app__header app__flex'>
        <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className='app__header-info'>
            <div className='app__header-badge'>
                <div className='badge-cmp app__flex'>
                    <span>👨‍💻</span>
                    <div style={{ marginLeft: 20 }}>
                        <p className='p-text'>Hey, I'm</p>
                        <h1 className='head-text'>Corey</h1>
                    </div>
                </div>
                <div className='tag-cmp app__flex'>
                    <p className='p-text'>A Full Stack Web Developer and Designer</p>
                </div>
            </div>
        </motion.div>
        <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, delayChildren: 0.5 }} className='app__header-img app__flex'>
            <motion.img 
                whileInView={{ scale: [0, 1] }} 
                transition={{ duration: 1, ease: 'easeInOut' }} 
                className='profile_image'
                src={theme === 'light' ? images.day_profile : images.night_profile}
                alt='profile_bg'
            />
        </motion.div>
        <motion.div variant={scaleVariants} whileInView={scaleVariants.whileInView} className='app__header-circles'>
            {[ images.node, images.react, images.javascript ].map((circle, index) => (
                <div className='circle-cmp app__flex' key={`circle-${index}`}>
                    <img src={circle} alt='circle' />
                </div>
            ))}
        </motion.div>
    </div>
}

export default AppWrap(Header, 'home', 'app__primary-bg')