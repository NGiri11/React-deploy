import React from "react";

function Aboutus() {
  const teamMembers = [
  { name: 'Navneet Giri', role: 'CEO & Co-Founder', img: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg' },
  { name: 'Deepanshu Kumar', role: 'Head of Operations', img: 'https://images.pexels.com/photos/7691739/pexels-photo-7691739.jpeg' },
  { name: 'Meera Patel', role: 'Lead Developer', img: 'https://images.pexels.com/photos/785667/pexels-photo-785667.jpeg' },
];

  return (
    <main className="about-container text-white">
      <section className="hero">
        <h1 className="text-5xl">About Nirvana Foods</h1>
        <p>
          Nirvana Foods brings your favorite meals from the best local eateries
          straight to your door. We're passionate about good food and
          convenient delivery.
        </p>
      </section>

      <hr />

      <section className="mission">
        <h2 className="text-3xl">Our Mission</h2>
        <p>
          To make delicious food accessible anywhere, anytime—while supporting
          local restaurants and chefs.
        </p>
      </section>

      <hr />

      <section className="values">
        <h2 className="text-3xl">Our Values</h2>
        <ul>
          <li>Quality: Only the freshest ingredients and trusted partners.</li>
          <li>Speed: Lightning-fast order processing and delivery.</li>
          <li>Transparency: Real-time tracking and clear pricing.</li>
          <li>Community: Uplifting local businesses and food artisans.</li>
        </ul>
      </section>

      <hr />

      <section className="team">
        <h2 className="text-4xl">Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card">
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Aboutus;
