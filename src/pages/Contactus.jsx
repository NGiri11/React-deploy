import React, { useState } from 'react';

function Contactus() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // replace with your API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="contact-container">
      <h2 className='text-white text-2xl'>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder='Enter Your Name'
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder='you@example.com'
            required
          />
        </label>

        <label>
          Phone
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            placeholder="10-digit Number"
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder='Enter Your Message Here'
            rows="5"
            required
          />
        </label>

        <button type="submit">Send Message</button>
        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );

}

export default Contactus;
