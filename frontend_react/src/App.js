import React from 'react'
import { createContext, useState } from 'react'
import ReactSwitch from 'react-switch'
import { BsLightningChargeFill, BsMoonFill } from 'react-icons/bs'
import { Folio, Footer, Header, TechStack, Experience, Education, Projects } from './container'
import { Navbar } from './components'
import './App.scss'

export const ThemeContext = createContext(null) // default context is null

const App = () => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((current) => (current === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className='app' id={theme}>
                <Navbar />
                <ReactSwitch 
                    className='app__switch'
                    onChange={toggleTheme} 
                    checked={theme === 'dark'} 
                    uncheckedIcon={<BsLightningChargeFill className='app__switch-icons light' />}
                    checkedIcon={<BsMoonFill className='app__switch-icons dark' />}
                    offColor='#fff'
                    onColor='#e4e4e4'
                    offHandleColor='#eef3f8'
                    onHandleColor='#fff'
                    handleDiameter={20}
                />
                <Header />
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