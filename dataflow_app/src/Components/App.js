import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactDOM } from "react";

const pages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [selectedPage, setSelectedPage] = useState(pages[0]);

  const handleChange = (event) => {
    const selectedPage = pages.find((page) => page.path === event.target.value);
    setSelectedPage(selectedPage);
  };

  return (
    <nav className="navigation">
      <h1 className="navigation-title">My Website</h1>
      <div className="navigation-dropdown">
        <select value={selectedPage.path} onChange={handleChange}>
          {pages.map((page) => (
            <option key={page.path} value={page.path}>
              {page.title}
            </option>
          ))}
        </select>
        <Link to={selectedPage.path} className="navigation-link">
          Go
        </Link>
      </div>
    </nav>
  );
};

const Page = ({ children }) => {
  return (
    <div className="page-container">
      <Navigation />
      <div className="page-content">{children}</div>
    </div>
  );
};

const Home = () => (
  <Page>
    <h1>Welcome to my website!</h1>
  </Page>
);

const About = () => (
  <Page>
    <h2>About Me</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </Page>
);

const Contact = () => (
  <Page>
    <h3>Contact Me</h3>
    <p>
      <a href="mailto:your-email@example.com">your-email@example.com</a>
    </p>
  </Page>
);

export default function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
    </div>
  );
}