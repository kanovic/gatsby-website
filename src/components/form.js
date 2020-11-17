import React from "react";
import "./form.css";

const Form = () => (
  <form name="contact" method="POST" data-netlify="true">
    <p>
      <label htmlFor="name">Your Name:</label>
      <input type="text" name="name" />
    </p>
    <p>
      <label htmlFor="email">Your Email:</label>
      <input type="email" name="email" />
    </p>
    <p>
      <label htmlFor="message">Message:</label>
      <textarea name="message"></textarea>
    </p>
    <p>
      <button className="btn" type="submit">
        Send
      </button>
    </p>
  </form>
);

export default Form;
