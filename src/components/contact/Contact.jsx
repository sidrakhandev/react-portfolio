import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_option">
          <article className="contact_option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>test@gmail.com</h5>
            <a href="mailto:test@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>dummyname</h5>
            <a href="https://m.me/dummyname" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+925678439860</h5>
            <a
              href="https://api.whatsapp.com/send?phone+233587686788"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
