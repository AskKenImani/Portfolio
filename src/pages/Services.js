import React from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Frontend Development",
    description:
      "Bring your website to life with stunning designs and seamless user experience. I create fast, responsive, and interactive websites using React, HTML, CSS, and JavaScript.",
  },
  {
    title: "Virtual Assistance",
    description:
      "Let me handle the time-consuming tasks while you focus on growth! I offer data entry, social media management, and email handling to keep your business running smoothly.",
  },
  {
    title: "Website Maintenance & Updates",
    description:
      "Your website deserves to stay fresh and secure! I handle updates, bug fixes, and content adjustments to keep your site performing at its best.",
  },
  {
    title: "Mathematics Tutoring",
    description:
      "Numbers made easy! I simplify complex math concepts, helping students excel with interactive and personalized tutoring sessions.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2>My Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
