import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
=============== 
Variables
===============
*/
:root {
  /* dark shades of primary color*/
  --clr-primary-1: hsl(205, 86%, 17%);
  --clr-primary-2: hsl(205, 77%, 27%);
  --clr-primary-3: hsl(205, 72%, 37%);
  --clr-primary-4: hsl(205, 63%, 48%);
  /* primary/main color */
  --clr-primary-5: hsl(205, 78%, 60%);
  /* lighter shades of primary color */
  --clr-primary-6: hsl(205, 89%, 70%);
  --clr-primary-7: hsl(205, 90%, 76%);
  --clr-primary-8: hsl(205, 86%, 81%);
  --clr-primary-9: hsl(205, 90%, 88%);
  --clr-primary-10: hsl(205, 100%, 96%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --clr-access: #183EFA;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 3px 3px 4px rgba(0, 0, 0, 0.7);
  --dark-shadow: 4px 4px 4px rgba(0, 0, 0, 0.9);
  --lw-shadow: 3px 3px 4px rgba(255, 255, 255, 0.7);
  --dw-shadow: 4px 4px 4px rgba(255, 255, 255, 0.9);
  --nav-height: 3.5rem;
  --max-width: 1170px;
  --fixed-width: 620px;
}

/*
=============== 
Global Styles
===============
*/
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  line-height: 1.5;
  font-size: 0.875rem;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 0.875rem;
}

p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

img {
  width: 100%;
  display: block;
}

.section {
  padding: 3rem 0;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}

@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}

main {
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Accessibility */
  input[type="checkbox"]:focus + div {
    outline: 0.15rem solid var(--clr-access);
    border-radius: 50%;
  }

  button:focus, a:focus {
    outline: 0.15rem solid var(--clr-access);
  }

  /* SideBar */
  .sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  transition: var(--transition);
  transform: translate(-100%);
  z-index: 3;
}

.show-sidebar {
  transform: translate(0);
}

@media screen and (min-width: 676px) {
  .sidebar {
    width: 400px;
  }
}

/* Stripe */
@media screen and (min-width: 800px) {
  .sidebar-wrapper {
    display: none;
  }
}

.sidebar-wrapper.show {
  visibility: visible;
  z-index: 2;
  transform: scale(1);
}

.submenu.show {
  display: block;
}

/* Cocktails */
  .section-title {
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    text-align: center;
    margin-bottom: 3.5rem;
    margin-top: 1rem;
  }

  .cocktails-center {
    width: 85vw;
    margin: 0 auto;
    max-width: var(--max-width);
    display: grid;
    row-gap: 2rem;
    column-gap: 2rem;
  }

  @media screen and (min-width: 576px) {
    .cocktails-center {
      grid-template-columns: repeat(auto-fill, minmax(338.8px, 1fr));
    }
  }
`;

export default GlobalStyles;
