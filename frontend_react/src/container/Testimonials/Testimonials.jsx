import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Testimonials.scss'

const Testimonials = () => {
    // Set functional component state
    const [brands, setBrands] = useState([])
    const [testimonials, setTestimonials] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleClick = index => setCurrentIndex(index)

    useEffect(() => {
        // Fetch data from Sanity
        const tmQuery = '*[_type == "testimonials"]'
        const brandsQuery = '*[_type == "brands"]'
        client.fetch(tmQuery).then(data => setTestimonials(data))
        client.fetch(brandsQuery).then(data => setBrands(data))
    }, [])

    const currentTest = testimonials[currentIndex]

    return <>
        {testimonials.length && (
            <>
                <div className='app__testimonial-item app__flex'>
                    <img src={urlFor(currentTest.imgUrl)} alt='testimonial' />
                    <div className='app__testimonial-content'>
                        <p className='p-text'>{currentTest.feedback}</p>
                        <div>
                            <h4 className='bold-text'>{currentTest.name}</h4>
                            <h5 className='p-text'>{currentTest.company}</h5>
                        </div>
                    </div>
                </div>
                <div className='app__testimonial-btns app__flex'>
                    <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                        <HiChevronLeft />
                    </div>
                    <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                        <HiChevronRight />
                    </div>
                </div>
            </>
        )}
        <div className='app__testimonial-brands app__flex'>
            {brands.map((brand) => (
                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, type: 'tween' }}
                    key={brand._id}
                >
                    <img src={urlFor(brand.imgUrl)} alt={brand.name} />
                </motion.div>
            ))}
        </div>
    </>
}

export default AppWrap(MotionWrap(Testimonials, 'app__testimonial'), 'testimonials', 'app__primarybg')