import React from "react";

import "./ClientTestimonials.css";

import { userOne, userTwo, userThree } from "../../images";

function ClientTestimonials() {
  return (
    <div className="client-testimonials">
      <h3>CLIENT TESTIMONIALS</h3>
      <div className="testimonial-container">
        <div className="testimonials-item">
          <img src={userOne} alt="user emily" />
          <p className="testimonial-description">
            We put our trust in Sunniside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <p className="client-name">Emily R.</p>
          <p className="client-job">Marketing Director</p>
        </div>
        <div className="testimonials-item">
          <img src={userTwo} alt="user jennie" />
          <p className="testimonial-description">
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>
          <p className="client-name">Thomas S.</p>
          <p className="client-job">Chief Operating Officer</p>
        </div>
        <div className="testimonials-item">
          <img src={userThree} alt="user thomas" />
          <p className="testimonial-description">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <p className="client-name">Jennie F.</p>
          <p className="client-job">Business Owner</p>
        </div>
      </div>
    </div>
  );
}

export default ClientTestimonials;
