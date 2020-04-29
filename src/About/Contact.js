import React from "react";

const Contact = ({ contact }) => (
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
  </>
);

export default Contact;
