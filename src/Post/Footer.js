import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <h5 className="footer">{props.role ? `Role: ${props.role}` : null}</h5>
      <h5 className="footer">{props.team ? `Team: ${props.team}` : null}</h5>
      <h5 className="footer">
        {props.format ? `Format: ${props.format}` : null}
      </h5>
      <h5 className="footer">
        {props.method ? `Method: ${props.method}` : null}
      </h5>
      {props.github ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.github}
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
