import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Education.scss'

const Education = () => {
    // Set component state
    const [education, setEducation] = useState([])

    useEffect(() => {
        const query = '*[_type == "education"]'
        client.fetch(query).then(data => setEducation(data)) // Fetch data from Sanity
    }, [])
    
    return <>
        <h2 className='head-text'>Education</h2>
        <div className='app__education-container'>
            {education.map((item, index) => (
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, type: 'tween' }}
                    className='app__education-item'
                    key={item.title + index}
                >
                    <div className='app__education-content'>
                        <div>
                            <h4 className='bold-text'>{item.timeframe}</h4>
                            <h5 className='p-text' style={{ marginTop: 20 }}>{item.title}</h5>
                            <p className='p-text' style={{ marginTop: 10 }}>{item.institution}</p>
                        </div>
                        <p className='p-text' style={{ marginTop: 20 }}>{item.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </>
}

export default AppWrap(MotionWrap(Education, 'app__education'), 'education', 'app__whitebg')