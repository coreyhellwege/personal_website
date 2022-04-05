import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Skills.scss'

const Skills = () => {
    // Set functional component state
    const [skills, setSkills] = useState([])

    useEffect(() => {
        // Fetch data from Sanity
        const query = '*[_type == "skills"]'
        client.fetch(query).then(data => setSkills(data))
    }, [])
    
    skills.sort((a, b) => a.order - b.order) // sort skills by order number

    return <>
        <h2 className='head-text'>Tech Stack</h2>
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
                <motion.div className='app__skills-exp-item'>
                    <p className='p-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                </motion.div>
            </motion.div>
        </div>
    </>
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'tech stack', 'app__primarybg')