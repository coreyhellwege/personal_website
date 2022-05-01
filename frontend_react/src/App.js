import React, { createContext, useState } from 'react'
import { Folio, Footer, Header, TechStack, Experience, Education, Projects } from './container'
import { Navbar } from './components'
import './App.scss'

export const ThemeContext = createContext(null) // default context is null

const App = () => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => setTheme((current) => (current === 'light' ? 'dark' : 'light'))

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className='app' id={theme}>
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <Header theme={theme} />
                <Projects />
                <TechStack />
                <Experience />
                <Folio />
                <Education />
                <Footer />
            </div>
        </ThemeContext.Provider>
    )
}

export default App