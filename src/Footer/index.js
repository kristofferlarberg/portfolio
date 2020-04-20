import React from "react";

const Footer = ({ projects, showDetails }) => {
  let item = projects.find((item) => item.id === showDetails);
  if (!item) {
    return;
  }
  return (
    <footer>
      <h4 className="footer">{item.role ? `Role: ${item.role}` : null}</h4>
      <h4 className="footer">{item.team ? `Team: ${item.team}` : null}</h4>
      <h4 className="footer">
        {item.format ? `Format: ${item.format}` : null}
      </h4>
      <h4 className="footer">
        {item.method ? `Method: ${item.method}` : null}
      </h4>
      <h4 className="footer">
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
      </h4>
    </footer>
  );
};

export default Footer;
