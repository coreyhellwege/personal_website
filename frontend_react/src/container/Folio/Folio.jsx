import React, { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Folio.scss'

const Folio = () => {
    const [folio, setFolio] = useState([]),
          [previousIndex, setPreviousIndex] = useState(2),
          [currentIndex, setCurrentIndex] = useState(1),
          [nextIndex, setNextIndex] = useState(0)

    const handlePrevious = index => setPreviousIndex(index),
          handleCurrent = index => setCurrentIndex(index),
          handleNext = index => setNextIndex(index)

    useEffect(() => {
        const query = '*[_type == "folio"]'
        client.fetch(query).then(data => setFolio(data))
    }, [])

    const left = folio[previousIndex], middle = folio[currentIndex], right = folio[nextIndex]

    return <>
        <div className='app__folio-top-container'>
            <h2 className='head-text'>Graphic Design</h2>
            <div className='app__flex'>
                <p className='p-text'>
                    I began my career as a Graphic Designer after studying my undergraduate degree in Communication Design.
                    Whilst living overseas in Vancouver, Canada 🇨🇦 I worked as an in-house designer for the Donnelly Group in the hospitality industry. 
                    I mainly designed branding and marketing material for the company's various pubs, restaurants and cocktail bars.
                    Here's some of the poster art I proudly decorated our venues with. 
                </p>
            </div>
        </div>
        <div className='app__folio-bottom-container'>
            {folio.length && (
                <div className='app__folio-image-container app__flex'>
                    <img src={urlFor(left.imgUrl)} alt={left.title} />
                    <img src={urlFor(middle.imgUrl)} alt={middle.title} />
                    <img src={urlFor(right.imgUrl)} alt={right.title} />
                </div>
            )}
            <div className='app__folio-btns app__flex'>
                <div className='app__flex' onClick={() => {
                    handleNext(nextIndex === 0 ? folio.length - 1 : nextIndex - 1)
                    handleCurrent(currentIndex === 0 ? folio.length - 1 : currentIndex - 1)
                    handlePrevious(previousIndex === 0 ? folio.length - 1 : previousIndex - 1)
                }}>
                    <HiChevronLeft />
                </div>
                <div className='app__flex' onClick={() => {
                    handleNext(nextIndex === folio.length - 1 ? 0 : nextIndex + 1)
                    handleCurrent(currentIndex === folio.length - 1 ? 0 : currentIndex + 1)
                    handlePrevious(previousIndex === folio.length - 1 ? 0 : previousIndex + 1)
                }}>
                    <HiChevronRight />
                </div>
            </div>
        </div>
    </>
}

export default AppWrap(MotionWrap(Folio, 'app__folio'), 'design', 'app__primary-bg')