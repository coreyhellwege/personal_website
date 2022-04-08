import React from 'react'
import { Folio, Footer, Header, TechStack, Experience, Education, Projects } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
    return <div className='app'>
        <Navbar />
        <Header />
        <Projects />
        <TechStack />
        <Experience />
        <Folio />
        <Education />
        <Footer />
    </div>
}

export default App