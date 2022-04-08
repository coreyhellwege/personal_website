import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import { BsGithub } from 'react-icons/bs'
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
            <div className='app__tech_stack-list'>
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
            <div className='app__tech_stack-description'>
                <h3>Home is where the JavaScript is.</h3>
                <p className='p-text'>
                    Whilst JavaScript is my preferred programming language of choice across the full stack, I always enjoy learning new languages and technologies.
                </p>
                <h4>Where I started</h4>
                <p className='p-text'>
                    My foundation in programming began with learning Ruby and Ruby on Rails at Coder Academy, and then moving into HTML5, CSS3 and vanilla JavaScript.
                    After learning the fundamentals, we moved into modern web development and started building web applications using the MERN stack.
                    As well as learning about document databases with MongoDB and Mongoose, we also learnt about relational databases using PostgreSQL.
                </p>
                <h4>Where I'm at</h4>
                <p className='p-text'>
                    Since studying at Coder Academy I have continued building web apps using the MERN stack and various other technologies.

                    I am competent writing modern JavaScript code according to Ecmascript standards using syntax features such as const/let, arrow functions, 
                    object destructuring, promises, async/await, string interpolation as well as various array & object methods. 
                    I also have a basic workable knowledge of Regular Expressions. 

                    Recently I've been studying how JavaScript works under the hood in closer detail. I've been learning about the JavaScript runtime environment, particularly
                    in the browser but also in NodeJS. I've covered how the JavaScript engine works (including the memory heap and the call stack), as well as the 
                    callback queue, event loop and Web APIs.
                    It has particularly been interesting learning about the history of JavaScript and how its implementation in the browser has evolved over time. I.e, starting
                    as a purely interpreted language before being optimised with compilers, such as Babel.  
                    My goal is to understand these foundations, allowing me to write clean, optimised code.
                    If you're interested you can check out my notes here: <a href='https://github.com/coreyhellwege/Advanced-JavaScript-Concepts' target='_blank' rel='noreferrer'><BsGithub /></a>


                    On the server side I have become proficient using Node JS along with the Express JS framework to build and consume RESTful APIs. 
                    I am comfortable handling asynchronous code using callbacks, promises and modern features such as async/await. 
                    I have experience building custom middleware, such as for efficiently adding authorisation protection to certain routes, as well as for effectively
                    catching, handling and throwing server errors. And I'm also well versed utilising external middleware, such as the exprerss-validator for data validation and
                    sanitisation, or say the express-async-handler package, for conveniently passing on exceptions in my Express routes to my custom error handler over 
                    the req, res, next cycle. 

                    I'm comfortable building schemas with Mongoose to effectively model Mongo DB documents, and I enjoy using tools such as the MongoDB Compass GUI for 
                    querying, analysing and optimising data during development.

                    Additionally, I have experience working with several server-side Node modules & libraries, such as Axios for receiving asynchronous HTTP requests from the client, 
                    Bcrypt for hashing user passwords, and JWT for generating and verifying web auth tokens to name a few.

                    On the client side I'm experienced building user interfaces using modern frameworks such as React JS and Next JS.
                    I am comfortable creating Functional Components and using React Hooks such as useState for managing local state and useEffect for executing side effects. 
                    I have also recently started using the Redux JS library for managing global state, creating Actions & Reducers, and using hooks such as useSelector to extract 
                    state from the Redux store, and useDispatch for dispatching the Actions. 
                    Other libraries I've used include React Router for managing routing and React Bootstrap for convenient access to Bootstrap components.
                </p>
                <h4>My Traffio stack</h4>

            </div>
        </div>
    </>
}

export default AppWrap(MotionWrap(TechStack, 'app__tech_stack'), 'tech stack', 'app__primarybg')