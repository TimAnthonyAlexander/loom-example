import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! We'll be in touch soon.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows="4" required />

        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;