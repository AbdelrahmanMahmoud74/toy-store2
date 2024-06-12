import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Message sent successfully!');
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='contacts'>
      <h1 className='hh'>Contact Us</h1>
      <p className='hh'>If you have any questions or inquiries, please feel free to contact us using the form below:</p> 
      <form onSubmit={handleSubmit}>
        <div className='container-b'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder='Enter Your Name' name="name" value={formData.name} onChange={handleChange} />
      
      
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder='Enter Your Email' name="email" value={formData.email} onChange={handleChange} />
       
       
          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder='Enter Your Message' name="message" rows="4" value={formData.message} onChange={handleChange} />
        </div>
        <button className='btn1' type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactUs;
