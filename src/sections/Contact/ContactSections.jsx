import React, { useState } from 'react';
import './ContactSection.css';
// import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';

function ContactForm() {
  const notify = () => toast("Wow so easy!");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      service_id: 'service_s21fs46',
      template_id: 'template_d1tf60r',
      user_id: 'JHWzJ3-1OSR4MyDfG',
      template_params: {
        name: formData.name,
        email: formData.email,
        message: formData.message
      }
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Your mail is sent!');
      } else {
        const err = await response.json();
        alert('Oops... ' + JSON.stringify(err));
      }
    } catch (error) {
      alert('Oops... ' + error.message);
    }
  };

  return (
    <div id='contact'>
    <form onSubmit={handleSubmit}>
      <img src="p2.svg" alt="form-image"></img>
      <video autoPlay muted loop className="bg-video">
        <source src="/v3.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
     {/* <h2> Contact Form</h2> */}
      <input
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message "
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit" onClick={notify}>Send</button>
      <ToastContainer />
    </form>
    </div>
  );
}

export default ContactForm;




