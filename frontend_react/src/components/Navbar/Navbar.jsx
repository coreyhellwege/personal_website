import React, { useState } from 'react'
import ReactSwitch from 'react-switch'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './Navbar.scss'

const Navbar = ({ theme, toggleTheme }) => {
    const [menuToggle, setMenuToggle] = useState(false)

    return <nav className='app__navbar'>
        <div className='app__navbar-logo-section'>
            <img src={images.logo} alt='logo' />
            <ReactSwitch 
                className='app__theme-switch'
                onChange={toggleTheme} 
                checked={theme === 'dark'} 
                uncheckedIcon={<BsSunFill className='app__theme-switch-icons light' />}
                checkedIcon={<BsMoonFill className='app__theme-switch-icons dark' />}
                offColor='#fff'
                onColor='#302d29'
                offHandleColor='#eef3f8'
                onHandleColor='#1E1B18'
                handleDiameter={20}
            />
        </div>
        <ul className='app__navbar-links'>
            {['home', 'projects', 'tech stack', 'experience', 'design', 'education', 'contact'].map((item) => (
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setMenuToggle(true)} />
            {menuToggle && (
                <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
                    <HiX onClick={() => setMenuToggle(false)} />
                    <ul>
                        {['home', 'projects', 'tech stack', 'experience', 'design', 'education', 'contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item}`} onClick={() => setMenuToggle(false)}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    </nav>
}

export default Navbar