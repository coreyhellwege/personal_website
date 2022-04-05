import React from 'react'

// active prop is the section that is currently active
const NavigationDots = ({ active }) => {
    return <div className='app__navigation'>
        {['home', 'projects', 'tech stack', 'experience', 'design', 'education', 'contact'].map((item, index) => (
            <a 
                href={`#${item}`} 
                key={item + index}
                className='app__navigation-dot'
                style={active === item ? { backgroundColor: '#f7df1e' } : { }}
            />
        ))}
    </div>
}

export default NavigationDots