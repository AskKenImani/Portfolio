import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6affedu", 
        "template_bnv3zgb",
        formData,
        "imamikenny27@gmail.com" 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      {status && <p>{status}</p>}
      <form id="contact-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          required
          placeholder="John Smith"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          required
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Message:</label>
        <textarea
          name="message"
          required
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
