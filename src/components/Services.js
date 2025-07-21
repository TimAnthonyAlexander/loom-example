import React from 'react';

const services = [
  { title: 'Teeth Whitening', desc: 'Brighten your smile with in-office or take-home treatments.' },
  { title: 'Dental Implants', desc: 'Permanent solutions for missing teeth.' },
  { title: 'Orthodontics', desc: 'Braces and clear aligners for all ages.' },
  { title: 'Preventive Care', desc: 'Routine exams, cleanings, and sealants.' }
];

function Services() {
  return (
    <section id="services" className="container">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;