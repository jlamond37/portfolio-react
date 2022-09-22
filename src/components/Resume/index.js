import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Juliet Lamond</h2>
          <ul>
            <li>
            Creative Project Manager from film to web development.
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/juliet-lamond-049bb789/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="https://github.com/jlamond37/portfolio-react/files/9621334/JulietLamond.pdf"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            Skills include HTML, CSS, Javascript, JQuery, MySQL, NoSQL, MongoDB, React, Node, Figma, Bootstrap, Canva, Adobe Premiere Pro.<br />
    
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;