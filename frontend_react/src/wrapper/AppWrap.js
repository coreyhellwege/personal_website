import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

const AppWrap = (Component, idName, classNames) => function HOC({ theme }) {
    // Because we are wrapping child components with this HOC, in order to pass the 'theme' state from the App parent component
    // to child components we need to intercept it here and then pass it along.
    return <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className='app__wrapper app__flex'>
            <Component theme={theme} />
        </div>
        <NavigationDots active={idName} />
    </div>
}

export default AppWrap