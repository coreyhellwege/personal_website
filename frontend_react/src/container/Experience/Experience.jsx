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
        <h2 className='head-text'>Experience</h2>
        <div className='app__experience-container'>
            <motion.div className='app__experience-exp'>
                {experience?.map((exp) => (
                    <motion.div className='app__experience-exp-item' key={exp.year}>
                        <div className='app__experience-exp-timeline'>
                            <div className='app__experience-exp-circle' />
                            <div className='app__experience-exp-line' />
                        </div>
                        <div className='app__experience-exp-year'>
                            <p className='bold-text'>{exp.year}></p>
                        </div>
                        <motion.div className='app__experience-exp-works'>
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
                                        <div className='app__experience-exp-work-company'>
                                            <h5 className='p-text'>{work.company}</h5>
                                        </div>
                                        <div className='app__experience-exp-work-company-desc'>
                                            <p className='p-text italic-text'>{work.companyDesc}</p>
                                        </div>
                                        <div className='app__experience-exp-work-description p-text'>
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
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </>
}

export default AppWrap(MotionWrap(Experience, 'app__experience'), 'experience', 'app__primarybg')