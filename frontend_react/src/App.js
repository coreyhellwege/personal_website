import React from 'react'
import { Folio, Footer, Header, Skills, Experience, Education, Projects } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
    return <div className='app'>
        <Navbar />
        <Header />
        <Folio />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Footer />
    </div>
}

export default App