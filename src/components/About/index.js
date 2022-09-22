import React from 'react';
import Picture from './IMG_2681.JPG';

function About() {

    return(
        <section className="container">
            <h2 class="top-title">Juliet Lamond</h2>
            <hr></hr>
            <div>
                <img class="mb-5" id="avatar" src={Picture} alt="Juliet Lamond" ></img>

                <p>
                Full Stack Web Developer. Also is involved with film, yoga, meditation, and all things tea-related.
                </p>
                <p>
                Skills include HTML, CSS, Javascript, JQuery, MySQL, NoSQL, MongoDB, React, Node, Figma, Bootstrap, Canva, Adobe Premiere Pro.
                </p>
                <p>
                Creative Project Manager from film to web development.
                </p>
            </div>
        </section>
    )
}

export default About;