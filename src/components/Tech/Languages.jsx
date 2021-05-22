import React from 'react';

const Languages = ({languages}) => (
  <>
    <ul>
      {languages.map(lang => (
        <li key={lang.id}>{lang.title}</li>
      ))}
    </ul>
  </>
);

export default Languages;
