import React, { createContext, useState } from 'react'
import ReactSwitch from 'react-switch'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
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
                    uncheckedIcon={<BsSunFill className='app__switch-icons light' />}
                    checkedIcon={<BsMoonFill className='app__switch-icons dark' />}
                    offColor='#fff'
                    onColor='#302d29'
                    offHandleColor='#eef3f8'
                    onHandleColor='#1E1B18'
                    handleDiameter={20}
                />
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