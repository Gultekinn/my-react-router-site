import React from "react";
import "../Contact/Contact.scss";
const Contact = () => {
  return (
    <div>
      <div className="contact">
       
        <div className="contact__form">
           <h1>Cotact With Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy
          eirmod tempor invidunt.
        </p>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email"  placeholder="Email"/> <br />
        <input type="phone"  placeholder="Phone"/>
        <input type="subject" placeholder="Subject" /> <br />
       <textarea name="message" placeholder="Message" className="message" cols="30" rows="10"></textarea>
       <button>SEND MESSAGE</button>
        </form>
        </div>


        <div className="contact__ifarme">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235495.62780269101!2d-73.932551722484!3d41.33466214858558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sbd!4v1637254792714!5m2!1sen!2sbd"  allowfullscreen="" loading="lazy" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
