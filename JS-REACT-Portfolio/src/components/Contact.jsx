import React from 'react';

const Contact = () => {
  return (
    <div className="contact-form">
      <form action="#" method="post">
        <h2>Contact Me</h2>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="4" required></textarea>
        </div>

        <div>
          <button className="submitbutton">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

