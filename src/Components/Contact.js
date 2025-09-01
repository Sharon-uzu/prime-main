import React from 'react'

const Contact = () => {


  return (
    <div>
        <div className="contact" id='contact'>
            <form className='contact-form'>
                <div className="c-f-c">
                    <h3>Get in Touch</h3>
                    <p>Our friendly team will get in touch with you</p>

                    <input type="text" placeholder='Full Name'/>
                    <input type="email" placeholder='Email Address'/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                    <button>Send Message</button>

                </div>
            </form>
        </div>



    </div>
  )
}

export default Contact