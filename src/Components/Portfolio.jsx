/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/developer_workspace.jpg";

const imageAltText = "A developer's workspace in a dark room writing some code";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "iPhone Class Diagram",
    description:
      "A simple class diagram of the iPhone. Created using PlantUML. Following the video from Steve Jobs introducing the iPhone.",
    url: "https://github.com/datdudu/iphone-class-diagram",
  },
  {
    title: "My first pokedex",
    description: "A very simple project to learn web development, constructing a pokedex using HTML, CSS and JS.",
    url: "https://github.com/datdudu/pokedex-project",
  },
  {
    title: "My Resume Site",
    description: "Created from Microsoft's Learn Student Amabassadors template. Using React and some CSS.",
    url: "https://github.com/datdudu/my-simple-portifolio",
  },
  {
    title: "Catalog API",
    description:
      "A simple API to catalog items. Using some strategies to make the code more readable and easy to maintain.",
    url: "https://github.com/datdudu/api-catalog",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
