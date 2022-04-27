import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// import ReactTooltip from 'react-tooltip'
import { PortableText } from '@portabletext/react'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Experience.scss'

const Experience = () => {
    // Set functional component state
    const [experience, setExperience] = useState([])

    useEffect(() => {
        // Fetch data from Sanity
        const query = '*[_type == "experiences"]'
        client.fetch(query).then(data => setExperience(data))
    }, [])
    
    return <>
        <div className='app__experience-exp app__flex'>
            <h2 className='head-text' style={{ marginBottom: 40 }}>Experience</h2>
            {experience?.map((exp) => (
                <div className='app__experience-exp-item'>
                    <div className='app__experience-exp-timeline'>
                        <div className='app__experience-exp-circle' />
                        <div className='app__experience-exp-line' />
                    </div>
                    <div className='app__experience-exp-works'>
                        <div className='app__experience-exp-year'>
                            <p className='bold-text'>{exp.year}</p>
                        </div>
                        {exp.works?.map((work) => (
                            <>
                                <motion.div
                                    whileInView={{ opacity: [0,1] }}
                                    transition={{ duration: 0.5 }}
                                    className='app__experience-exp-work'
                                    data-tip
                                    data-for={work.name}
                                    key={work.name} 
                                >
                                    <h4 className='bold-text'>{work.name}</h4>
                                        <h5 className='p-text' style={{ marginLeft: 20, marginTop: 20 }}>{work.company}</h5>
                                        <p className='p-text italic-text' style={{ marginLeft: 20, marginBottom: 20 }}>{work.companyDesc}</p>
                                    <div className='p-text' style={{ marginLeft: 10 }}>
                                        <PortableText value={work.description} />
                                    </div>
                                </motion.div>
                                {/* <ReactTooltip
                                    id={work.name}
                                    effect='solid'
                                    arrowColor='#fff'
                                    className='app__experience-exp--tooltip'
                                >
                                    {work.tooltip}
                                </ReactTooltip> */}
                            </>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </>
}

export default AppWrap(MotionWrap(Experience, 'app__experience'), 'experience', 'app__secondary-bg')