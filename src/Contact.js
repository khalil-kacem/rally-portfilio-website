import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import './Contact.css'
import race from './Lucy/race.jpg'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gze3ze7', 'template_227fqsk', form.current, {
        publicKey: 'jdfkgWdt-jv1dswnr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
<div>
        <div className='Contact'>
            <div className='seccontact'>
                <div className='trophy'>
                <i class="fa-solid fa-trophy"></i>
                </div>
                <h1>CONTACT</h1>
                <p>If <a>you</a> have any <a>questions</a> please <a>contact</a> us </p>
            </div>
           
        </div>
        <div className='thirdcontact'>
              <div className='formulaire'>
                <h1>Leave your message here </h1>
                <form onSubmit={sendEmail} ref={form}>
                <input type='text' name="user_name" placeholder='Name' required/>
                <input type='email' name='user_email' placeholder='Email' required/>
                <input type='tel' name='user_phone' placeholder='Phone' required/>
                <textarea name='user_message' placeholder='Message' required/>
                <button type='submit'>SEND MESSAGE</button>
                </form>
              </div>
              <div className='formimg'>
                <img src={race} />
              </div>
          </div>

    </div>

  )
}

export default Contact;
