import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './TechStack.scss'

const TechStack = () => {
    // Set functional component state
    const [techStack, setTechStack] = useState([])

    useEffect(() => {
        // Fetch data from Sanity
        const query = '*[_type == "techStack"]'
        client.fetch(query).then(data => setTechStack(data))
    }, [])
    
    techStack.sort((a, b) => a.order - b.order) // sort by order number

    return <>
        <h2 className='head-text'>Tech Stack</h2>
            <div className='app__tech_stack-container'>
                <div className='app__tech_stack-list app__flex'>
                    {techStack?.map((item) => (
                        <motion.div 
                            whileInView={{ opacity: [0,1] }}
                            transition={{ duration: 0.5 }}
                            className='app__tech_stack-item app__flex'
                            key={item.name}
                        >
                            <div className='app__flex' style={{ backgroundColor: item.bgColor }}>
                                <img src={urlFor(item.icon)} alt={item.name} />
                            </div>
                            <p className='p-text'>{item.name}</p>
                        </motion.div>
                    ))}
                </div>
                <div className='app__flex'>
                    <h2>Home is where the JavaScript is.</h2>
                </div>
            </div>
            <div className='app__tech_stack_description-container'>
                <div className='app__tech_stack-description'>
                    <h4>Where I started</h4>
                    <p className='p-text'>
                        My foundation in programming began at Coder Academy, where I learnt Ruby & Ruby on Rails before moving onto HTML5, CSS3 and vanilla JavaScript.
                        After learning the fundamentals, we moved into modern web development and started building web applications using the MERN stack.
                        We learnt about document databases with MongoDB and Mongoose, as well as relational databases with PostgreSQL.
                    </p>
                    <p className='p-text'>
                        Since studying at Coder Academy I have continued building web apps using the MERN stack and various other technologies.
                    </p>

                    <h4>Where I am now</h4>
                    <p className='p-text'>
                        Whilst JavaScript is my preferred programming language of choice across the full stack, I always enjoy learning new languages and technologies.
                    </p>
                    <p className='p-text'>
                        I am competent writing modern JavaScript code according to Ecmascript standards, using syntax features such as <span className='code'>const</span>/<span className='code'>let</span>, 
                        arrow functions, object destructuring, string interpolation as well as various array & object methods. 
                        I'm also comfortable handling asynchronous code using callbacks and promises, with syntax such as <span className='code'>async</span>/<span className='code'>await</span>.
                        I also have a basic workable knowledge of Regular Expressions. 
                    </p>
                    <p className='p-text'>
                        Recently I've been studying how JavaScript works under the hood in closer detail. I've been learning about the JavaScript runtime environment, particularly
                        in the browser but also in NodeJS. I've covered how the JavaScript engine works, including the memory heap and call stack as well as the 
                        callback queue, event loop and Web APIs.
                    </p>
                    <p className='p-text'>
                        It has particularly been interesting learning about the history of JavaScript and how its implementation in the browser has evolved over time. I.e, starting
                        as a purely interpreted language before being optimised with compilers, such as Babel.
                    </p>
                    <p className='p-text'>
                        My goal is to understand these foundations, allowing me to write clean, optimised code.
                        If you're interested you can <a href='https://github.com/coreyhellwege/Advanced-JavaScript-Concepts' target='_blank' rel='noreferrer'>check out my notes here</a>.
                    </p>

                    <h5>Backend stack</h5>
                    <p className='p-text'>
                        On the server side I have become proficient using Node JS along with the Express JS framework to build and consume RESTful APIs. 
                    </p>
                    <p className='p-text'>
                        I have experience building custom middleware, such as for adding authorisation protection to specific routes, as well as for effectively
                        catching, handling and throwing server errors. And I'm also well versed utilising external middleware, such as the exprerss-validator for data validation and
                        sanitisation, or the express-async-handler package for passing on exceptions to my custom error handler over the <span className='code'>req</span>, <span className='code'>res</span>, <span className='code'>next</span> cycle. 
                    </p>
                    <p className='p-text'>
                        I'm comfortable building schemas with Mongoose to effectively model MongoDB documents and I enjoy using tools such as MongoDB Compass for 
                        querying, analysing and optimising data during development.
                    </p>
                </div>
                <div className='app__tech_stack-description'>
                    <p className='p-text'>
                        Additionally, I have experience working with several server-side Node modules & libraries such as Axios for receiving asynchronous HTTP requests from the client, 
                        Bcrypt for hashing user passwords, and JWT for generating and verifying web auth tokens.
                    </p>

                    <h5>Frontend stack</h5>
                    <p className='p-text'>
                        On the client side I'm experienced building user interfaces using modern frameworks such as ReactJS and NextJS.
                    </p>
                    <p className='p-text'>
                        I am comfortable creating Functional Components and using React Hooks such as <span className='code'>useState</span> for managing local state and <span className='code'>useEffect</span> for executing side effects. 
                    </p>
                    <p className='p-text'>
                        I have also recently started using the ReduxJS library for managing global state, creating Actions & Reducers and using hooks such as <span className='code'>useSelector</span> to extract 
                        state from the Redux store and <span className='code'>useDispatch</span> for dispatching the Actions. 
                        Other libraries I've used include React Router for managing view routes and React Bootstrap for styled UI components.
                    </p>
                    <p className='p-text'>
                        I am proficient at writing custom CSS3 and Sass code for styling DOM elements, using features such as FlexBox, variables and nesting.
                        I also have some experience with CSS Animations and I've used the Framer Motion library for creating declarative animations in React.
                    </p>

                    <h4>Traffio tech stack</h4>
                    <p className='p-text'>
                        Traffio is comprised of a Web App and a Native App hosted on AWS. 
                    </p>
                    <p className='p-text'>
                        On the server side Traffio was built using the LAMP stack. Running on a Linux OS instance, using Apache for the web server and MySQL for the database.
                        The REST API is written in PHP using the CodeIgniter framework. 
                    </p>
                    <p className='p-text'>
                        On the client side, the Traffio Web App mainly uses the BackboneJS framework with MarionetteJS views in the browser. Although we are slowly beginning to 
                        rebuild the UI using React components.
                    </p>
                    <p className='p-text'>
                        For testing we use the PHP CodeCeption framework to create unit and integration tests.
                    </p>
                    <p className='p-text'>
                        Through my work at Traffio I've also had experience building integrations with third-party REST API services for sharing data. This has involved 
                        working with authorisation methods such as OAuth2 and BasicAuth, as well as subscribing and listening to webhooks.
                    </p>
                    <p className='p-text'>
                        Some developer tools I am used to working with include: Postman, for interacting with REST APIs. MySQL Workbench & MongoDB Compass, for querying databases.
                        And various browser extensions such us React & Redux DevTools, for interacting with application state.
                    </p>
                </div>
            </div>
    </>
}

export default AppWrap(MotionWrap(TechStack, 'app__tech_stack'), 'tech stack', 'app__primarybg')