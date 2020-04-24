import React from "react";

const Links = ({ links }) => (
  <section className="links">
    {links.map((item) => (
      <ul key={item.id}>
        <li key={item.id}>
          <a target="_blank" rel="noopener noreferrer" href={item.link}>
          → {item.name}
          </a>
        </li>
      </ul>
    ))}
  </section>
);

export default Links;
