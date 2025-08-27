import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          confetti(); // 🎉 Boom!
          setSubmitted(true);

          // ✅ Auto-reset form view after 6 seconds
          setTimeout(() => {
            setSubmitted(false);
          }, 6000);
        },
        (error) => {
          console.error('Failed to send email:', error);
        }
      );

    e.target.reset(); // Optional: clear form fields
  };

  return (
    <div className="contact-form">
      {!submitted ? (
        <form className="fade-in" onSubmit={handleSubmit}>
          <h2>Contact Me</h2>

          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" required />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Message:</label>
            <textarea name="message" rows="4" required />
          </div>

          <button className="submitbutton" type="submit">Submit</button>
        </form>
      ) : (
        <div className="thank-you fade-in">
          <div className="thank-you-icon">
            <i className="bx bx-envelope"></i>
          </div>
          <h2>Thank you!</h2>
          <p>Your message has been sent.</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
