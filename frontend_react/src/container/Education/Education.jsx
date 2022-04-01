import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Education.scss'

const Education = () => {
    // Set component state
    const [education, setEducation] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleClick = index => setCurrentIndex(index)

    useEffect(() => {
        // Fetch data from Sanity
        const query = '*[_type == "education"]'
        client.fetch(query).then(data => setEducation(data))
    }, [])

    const selectedItem = education[currentIndex]

    return <>
        <h2 className='head-text'>Education</h2>
        <div className='app__education-container'>
            {education.length && (
                <div className='app__education-item app__flex'>
                    <div className='app__education-content'>
                        <div>
                            <h4 className='bold-text'>{selectedItem.timeframe}</h4>
                            <h5 className='p-text'>{selectedItem.title}</h5>
                            <p className='p-text'>{selectedItem.institution}</p>
                        </div>
                        <p className='p-text'>{selectedItem.description}</p>
                    </div>
                </div>
            )}
        </div>
        <div className='app__education-btns app__flex'>
            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? education.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
            </div>
            <div className='app__flex' onClick={() => handleClick(currentIndex === education.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
            </div>
        </div>

        <div className='app__profiles'>
            {about.map((about, index) => (
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, type: 'tween' }}
                    className='app__profile-item'
                    key={about.title + index}
                >
                    <img src={urlFor(about.imgUrl)} alt={about.title} />
                    <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                    <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
                </motion.div>
            ))}
        </div>
    </>
}

export default AppWrap(MotionWrap(Education, 'app__education'), 'education', 'app__whitebg')