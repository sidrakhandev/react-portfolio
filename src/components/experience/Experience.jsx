import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experiences">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className=" experience_details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className=" experience_details">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className=" experience_details">
              <BsPatchCheckFill />
              <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className=" experience_details">
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className=" experience_details">
              <BsPatchCheckFill />
              <h4>Node JS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>PHP</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className=" experience_details">
              <BsPatchCheckFill />
              <h4>MySQL</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className=" experience_details">
              <BsPatchCheckFill />
              <h4>Typescript</h4>
              <small className="text-light">Basic</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
