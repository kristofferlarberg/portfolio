import React from 'react';

const Footer = ({ projects, showDetails }) => {
  let item = projects.find(item => item.id === showDetails);
  if (!item) {
    return
  }
  return (
    <article>
        <footer>
          <h3>{item.role ? `Role: ${item.role}` : null}</h3>
          <h3>{item.team ? `Team: ${item.team}` : null}</h3>
          <h3>{item.format ? `Format: ${item.format}` : null}</h3>
          <h3>{item.method ? `Method: ${item.method}` : null}</h3>
          <h3>{item.github ? <a href={item.github} className='github'><img src='img/github.svg' alt='Project documentation' className='github' ></img></a> : null}</h3>
        </footer>
    </article >
  )
}

export default Footer;






