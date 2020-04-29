import React from "react";

const Footer = ({ projects, showDetails }) => {
  let item = projects.find((item) => item.id === showDetails);
  if (!item) {
    return;
  }
  return (
    <footer>
      <h5 className="footer">{item.role ? `Role: ${item.role}` : null}</h5>
      <h5 className="footer">{item.team ? `Team: ${item.team}` : null}</h5>
      <h5 className="footer">
        {item.format ? `Format: ${item.format}` : null}
      </h5>
      <h5 className="footer">
        {item.method ? `Method: ${item.method}` : null}
      </h5>
      {item.github ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={item.github}
          className="github"
        >
          <img
            src="img/github.svg"
            alt="Project documentation"
            className="github"
          ></img>
        </a>
      ) : null}
    </footer>
  );
};

export default Footer;
