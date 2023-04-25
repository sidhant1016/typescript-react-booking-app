    import React from 'react'
    import"./Contact.css"

    const Contact = () => {
    return (
        <div className='contact'>
            <h1 className='contactText'>
            Save time, save money!
            </h1>
            <span className='contactDesc'>
            Sign up and we'll send the best deals to you
            </span>
            <div className='contactInputContainer'>
                <input className='contactInput' type='text' placeholder='Name' />
                <input className='contactInput' type='email' placeholder='Email' />
                <input className='contactInput' type='text' placeholder='Message' />
            </div>
            <button>Submit</button>
        
        </div>
    )
    }

    export default Contact
