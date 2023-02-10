import { useState } from 'react'
import heart from './images/heart.png'
import line6 from './images/Line 6.png'

import { HiOutlineUserCircle } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'

function App() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <header>
        <nav className='nav'>
          <span>
            l
            <img src={heart} alt='' className='heart' />
            yalbaze
          </span>

          <button type='submit' className='btn'>
            Get Priority Access
          </button>
        </nav>
      </header>
      <section className='hero'>
        <h1>
          Turn your best customers <br /> into <span>Loyal fans</span>
        </h1>
        <p>
          Loyalbaze, empowers businesses to offer digital, mobile-first loyalty
          programs to their customers. With our AI Powered platform, you can
          easily create and manage custom loyalty and rewards programs, track
          customer engagement, and gain valuable insights to improve your
          business. Sign up now to get early access.
        </p>

        <form onSubmit={handleSubmit} className='user-form'>
          <div>
            <HiOutlineUserCircle />
            <input type='text' placeholder='Tell us your name' required />
          </div>
          <div>
            <AiOutlineMail />
            <input
              type='email'
              placeholder='Enter your email address'
              required
            />
          </div>

          <button type='submit' className='form-btn'>
            Get early access
          </button>
        </form>
      </section>

      <section className='content-container'>
        <div className='content'>
          <div className='priority'>
            <h2>Priority Access</h2>
            <div className='sign-image'>
              <img src={line6} alt='' />
            </div>
            <p>
              Get ready to revolutionize the way you interact with your
              customers and drive sales with Loyalbaze. Skip the waitlist and
              get exclusive priority access to LoyalBaze. Limited slots
              available. Please tell us a bit about your business and needs and
              of our consultants will be in touch Immediately!
            </p>
          </div>
          <div className='consult'>
            <h4>Book a Consultation with us</h4>
            <form className='consultation-form'>
              <div>
                <input type='text' placeholder='Enter your full name' />
              </div>
              <div>
                <input type='text' placeholder='Enter your work email' />
              </div>

              <div>
                <input type='text' placeholder='Mobile number' />
              </div>
              <div>
                <input type='text' placeholder='Company Name' />
              </div>
              <div>
                <select name='country' id='country'>
                  <option value='Select Country'>Select Country</option>
                  <option value='nigeria'>Nigeria</option>
                  <option value='uk'>Uk</option>
                  <option value='ghana'>Ghana</option>
                </select>
              </div>
              <div>
                <textarea placeholder='Drop a message.....'></textarea>
              </div>
              <button type='submit' className='form-btn'>
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
