import React from 'react'
import { About, Footer, Header, Skills, Experience, Education, Work } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
    return <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Experience />
        <Education />
        <Footer />
    </div>
}

export default App