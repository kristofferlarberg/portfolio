import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    overflow-y: scroll;
    overflow-x: hidden;
    --color: ${props => props.color};
  }

  body {
    width: 100vw;
    margin: 0;
    font-family: "HK Grotesk", sans-serif;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  h1 {
    font-size: 3rem;
    letter-spacing: -0.02rem;
    font-weight: 500;
    line-height: 3rem;
    margin: 0;
  }

  h2 {
    font-size: 2rem;
    letter-spacing: -0.02rem;
    font-weight: 700;
  }

  h3 {
    font-size: 2rem;
    letter-spacing: -0.02rem;
    font-weight: 500;
    font-style: italic;
  }

  h4 {
    font-family: "Space Mono", monospace;
    font-size: 1.6rem;
    line-height: 4.5rem;
    font-weight: 400;
    padding: 0;
    margin: 0;
  }

  p {
    margin: 1.7rem 0;
  }

  p.disclaimer {
    margin: 6rem 2rem 0 2rem;
    width: auto;
    text-align: center;
  }

  a,
  a:active,
  a:visited {
    color: black;
    text-decoration: none;
    font-weight: 700;
    box-shadow: inset 0 0 0 0 black;
    transition: box-shadow 0.1s;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
    cursor: pointer;
  }

  a:hover {
    color: black;
    box-shadow: inset 0 -0.3rem 0 0 black;
    transition: box-shadow 0s;
  }

  ul {
    line-height: 3.5rem;
    margin: 0;
    padding-left: 0;
    list-style-type: none;
  }

  img {
    image-rendering: auto;
    image-rendering: -webkit-optimize-contrast;
    max-width: 100%;
    margin: 0;
  }

  @media only screen and (max-width: 1000px) {
    body {
      font-size: 1.7rem;
    }

    h1 {
      font-size: 2.2rem;
    }

    h2 {
      font-size: 1.7rem;
    }

    h3 {
      font-size: 1.7rem;
    }

    h4 {
      font-size: 1.2rem;
      line-height: 3.5rem;
    }

    p {
      width: auto;
      font-size: 1.7rem;
    }

    a,
    a:hover,
    a:active,
    a:visited {
      box-shadow: inset 0 -0.25rem 0 0 black;
    }

    img {
      width: 100%;
    }
  }
`;

export default GlobalStyle;
