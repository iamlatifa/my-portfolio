import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import { MdEmail } from 'react-icons/md'
import {FaLinkedin, FaAngellist} from 'react-icons/fa'

const Contact = () => {
  const form = useRef();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const userEmail = formData.get('email');
    const name = formData.get('name');

    // Send email to you (the recipient)
    emailjs.sendForm('service_aofbjoy', 'template_lhipafd', form.current, 'UtTwBkd3SsVqXtYw1')
      .then((result) => {
          console.log('Email sent to recipient:', result.text);
          setShowConfirmation(true);
          setTimeout(() => setShowConfirmation(false), 15000); // Hide after 5 seconds
      }, (error) => {
          console.log('Error sending to recipient:', error.text);
      });

    // Send confirmation email to the user
    emailjs.send('service_aofbjoy', 'template_zttmu4b', {
      to_email: userEmail,
      name: name,
    }, 'UtTwBkd3SsVqXtYw1')
      .then((result) => {
          console.log('Confirmation email sent to user:', result.text);
      }, (error) => {
          console.log('Error sending confirmation:', error.text);
      });

    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>latifaanayouss@gmail.com</h5>
            <a href='latifaanayouss@gmail.com' target="_blank" rel="noreferrer">Send a message</a>
          </article>
            <article className='contact_option'>
            <FaLinkedin className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>iamlatifa</h5>
            <a href='https://www.linkedin.com/in/geekhamza/' target="_blank" rel="noreferrer">Send a message</a>
          </article>
          
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder="Type your message" required></textarea>
          <button type='submit' className='btn-primary'>Send Message</button>
          {showConfirmation && (
            <div className="confirmation-message">
              Message sent successfully! Thank you for contacting me.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact