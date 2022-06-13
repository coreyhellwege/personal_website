import React, { useState, useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Projects.scss'

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All'), // 'activeFilter' component state default to 'All'
          [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 }), // component animation state
          [projects, setProjects] = useState([]),
          [filterProject, setFilterProject] = useState([])

    // useEffect only runs when the component is rendered
    useEffect(() => {
        const query = '*[_type == "projects"]'
        // Fetch data from Sanity
        client.fetch(query).then(data => {
            setProjects(data)
            setFilterProject(data)
        })
    }, [])

    projects.sort((a, b) => a.order - b.order) // sort by order number

    const handleProjectFilter = (item) => {
        setActiveFilter(item)
        setAnimateCard([{ y: 100, opacity: 0 }])

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]) // re-trigger cards shuffle animation when category changes
            item === 'All' ? setFilterProject(projects) : setFilterProject(projects.filter(project => project.tags && project.tags.includes(item)))
        }, 500);
    }

    return <>
        <h2 className='head-text'>Personal Projects</h2>
        <div className='app__project-description'>
            <p className='p-text'>
                Building side applications in my spare time is my favourite way to learn new technologies and hone my skills.
            </p>
        </div>
        <div className='app__project-filter'>
            {['React JS', 'Node JS', 'Mongo DB', 'Express JS', 'Next JS', 'TypeScript', 'All'].map((item, index) => (
                <div 
                    key={index} 
                    onClick={() => handleProjectFilter(item)}
                    className={`app__project-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                >
                    {item}
                </div>
            ))}
        </div>
        <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className='app__project-portfolio'
        >
            {filterProject.map((project, index) => (
                <div className='app__project-item app__flex' key={index}>
                    {project.imgUrl && <div className='app__project-img app__flex'>
                        <img src={urlFor(project.imgUrl)} alt={project.name} />
                        <motion.div
                            whileHover={{ opacity: [0, 1] }}
                            transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                            className='app__project-hover app__flex'
                        >
                            <a href={project.codeLink} target='_blank' rel='noreferrer'>
                                <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 0.9] }}
                                    transition={{ duration: 0.25 }}
                                    className='app__flex'
                                >
                                    <AiFillGithub />
                                </motion.div>
                            </a>
                        </motion.div>
                    </div>}
                    <div className='app__project-content app__flex'>
                        <a href={project.codeLink} target='_blank' rel='noreferrer'>
                            <h4>{project.title}</h4>
                        </a>
                        <p className='p-text' style={{ marginTop: 10 }}>{project.description}</p>
                        <div className='app__project-tag app__flex'>
                            <p className='p-text'>{project.year}</p>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    </>
}

export default AppWrap(MotionWrap(Projects, 'app__projects'), 'projects', 'app__secondary-bg')