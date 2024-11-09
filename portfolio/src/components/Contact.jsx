import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_9g3bo4s',            // Service ID
      'template_c36bd6q',           // Template ID
      {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        subject: formData.subject,
        message: formData.message
      },
      '3eFIbhM3mMIDdxw5s'           // Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
      });
    })
    .catch((error) => {
      console.log('FAILED...', error);
      alert('Error sending message. Please try again later.');
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="Contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="number"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Email Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <br />
        <br />
        <br />
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
