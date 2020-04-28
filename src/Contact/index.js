import React from "react";
import Links from "./Links";

const Contact = ({ contact, links }) => (
  <>
    <section className="links">
      <ul>
        {contact.map((item) => (
          <li key={item.id}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`mailto:${item.contact}`}
            >
              {item.contact}
            </a>
          </li>
        ))}
      </ul>
    </section>
    <Links links={links} />
  </>
);

export default Contact;
