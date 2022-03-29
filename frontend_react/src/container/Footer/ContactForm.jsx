import React, { useState } from 'react'
import { client } from '../../client'
import './ContactForm.scss'

const ContactForm = () => {
    // Set form state
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    // Destructure form data
    const { name, email, message } = formData

    // Just accepts a key-press event
    const handleChangeInput = (e) => {
        const { name, value } = e.target // extract name & value from the current input
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = () => {
        setLoading(true)

        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message
        }

        client.create(contact)
            .then(() => {
                setLoading(false)
                setIsFormSubmitted(true)
            })
    }

    return <>
        {!isFormSubmitted ?
        <div className='app__footer-form app__flex'>
            <div className='app__flex'>
                <input className='p-text' type='text' placeholder='Name' name='name' value={name} onChange={handleChangeInput} />
            </div>
            <div className='app__flex'>
                <input className='p-text' type='email' placeholder='Email' name='email' value={email} onChange={handleChangeInput} />
            </div>
            <div>
                <textarea className='p-text' placeholder='Your message' name='message' value={message} onChange={handleChangeInput} />
            </div>
            <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send'}</button>
        </div>
        : <div>
            <h3 className='head-text'>Thanks for getting in touch!</h3>
        </div>}
    </>
}

export default ContactForm