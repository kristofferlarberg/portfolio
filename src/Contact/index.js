import React from "react";

const Contact = ({ contact }) => (
  <>
    <section className="links">
      {contact.map((item) => (
        <div>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${item.email}`}
              >
                {item.email}
              </a>
            </li>
          </ul>
        </div>
      ))}
    </section>
    <section className="links">
      {contact.map((item) => (
        <div>
          <ul>
            <li>
              <a target="_blank" rel="noopener noreferrer" href={item.github}>
                GitHub
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href={item.linkedin}>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      ))}
    </section>
  </>
);

export default Contact;
