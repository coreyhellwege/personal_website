import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'
import { PortableText } from '@portabletext/react'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Skills.scss'

const Skills = () => {
    // Set functional component state
    const [experience, setExperience] = useState([])
    const [skills, setSkills] = useState([])

    useEffect(() => {
        // Fetch data from Sanity
        const expQuery = '*[_type == "experiences"]'
        const skillsQuery = '*[_type == "skills"]'
        client.fetch(expQuery).then(data => setExperience(data))
        client.fetch(skillsQuery).then(data => setSkills(data))
    }, [])
    
    skills.sort((a, b) => a.order - b.order) // sort skills by order number

    return <>
        <h2 className='head-text'>Skills & Experience</h2>
        <div className='app__skills-container'>
            <motion.div className='app__skills-list'>
                {skills?.map((skill) => (
                    <motion.div 
                        whileInView={{ opacity: [0,1] }}
                        transition={{ duration: 0.5 }}
                        className='app__skills-item app__flex'
                        key={skill.name}
                    >
                        <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                            <img src={urlFor(skill.icon)} alt={skill.name} />
                        </div>
                        <p className='p-text'>{skill.name}</p>
                    </motion.div>
                ))}
            </motion.div>
            <motion.div className='app__skills-exp'>
                {experience?.map((exp) => (
                    <motion.div className='app__skills-exp-item' key={exp.year}>
                        <div className='app__skills-exp-year'>
                            <p className='bold-text'>{exp.year}></p>
                        </div>
                        <motion.div className='app__skills-exp-works'>
                            {exp.works?.map((work) => (
                                <>
                                    <motion.div
                                        whileInView={{ opacity: [0,1] }}
                                        transition={{ duration: 0.5 }}
                                        className='app__skills-exp-work'
                                        data-tip
                                        data-for={work.name}
                                        key={work.name} 
                                    >
                                        <h4 className='bold-text'>{work.name}</h4>
                                        <h5 className='p-text'>{work.company}</h5>
                                        <p className='p-text'><PortableText value={work.description} /></p>
                                    </motion.div>
                                    <ReactTooltip
                                        id={work.name}
                                        effect='solid'
                                        arrowColor='#fff'
                                        className='skills-tooltip'
                                    >
                                        {work.tooltip}
                                    </ReactTooltip>
                                </>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </>
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg')