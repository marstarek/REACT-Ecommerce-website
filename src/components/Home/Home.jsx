import React from "react";
import logo from "../../imag/me.jpeg";
import "./homestyle.css";
const Home = () => {
  return (
    <>
      <article className="portofolio">
        <div className="portofolio__image">
          <img className="portofolio__image" src={logo} alt="Logo" />
        </div>
        <div className="portofolio__body">
          <div className="portofolio__text">
            <h2 className="portofolio__title fs-2 my-4">
              Tarek Ahmed Elrashidy
            </h2>
            <h4 className="portofolio__description">Web Designer</h4>
            <p>
              Web designers plan, create and code internet sites and web pages,
              many of which combine text with sounds, pictures, graphics and
              video clips
            </p>
            <h5>Skills</h5>
            <ul className="skills">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Javascript</li>
              <li>Angular</li>
              <li>React</li>
            </ul>
          </div>

          <div className="portofolio__footer mx-auto">
            <div className="author__name-wrap">
              <a href="https://www.facebook.com/tarekahmed9368">
                <i class="bi bi-facebook"></i>
              </a>
              <a href=" https://github.com/marstarek">
                <i class="bi bi-github"></i>
              </a>
              <a href=" https://www.linkedin.com/in/tarek-ahmed-89b403190/">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Home;
