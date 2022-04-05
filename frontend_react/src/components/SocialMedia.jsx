import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return <div className='app__social'>
    <a href='https://github.com/coreyhellwege' target='_blank' rel='noreferrer'><BsGithub /></a>
    <a href='https://linkedin.com/in/coreyhellwege/' target='_blank' rel='noreferrer'><BsLinkedin /></a>
  </div>
}

export default SocialMedia