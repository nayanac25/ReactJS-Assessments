import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-heading">Contact Us</h2>

      <div className="contact-container">
        <div className="contact-card details-card">
          <h3>Our Contact Details</h3>
          <p>
            <strong>Company Name:</strong> GlobeYatra Tours
          </p>
          <p>
            <strong>Phone:</strong> +91 9284465945
          </p>
          <p>
            <strong>Email:</strong> info@globeyatra.com
          </p>
          <p>
            <strong>Address:</strong> Pune, Maharashtra, India
          </p>

          <div className="office-hours">
            <h4>Office Hours</h4>
            <p>Mon - Sat : 9:00 AM - 7:00 PM</p>
            <p>Sunday : Closed</p>
          </div>
        </div>

        <div className="contact-card form-card">
          <h3>Send Your Inquiry</h3>

          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea
              rows="4"
              placeholder="Write your message here..."
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
