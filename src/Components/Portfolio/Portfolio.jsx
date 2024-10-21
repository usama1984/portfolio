import React from "react";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Portfolio = () => {
  let [categories] = useState({
    Angular: [
      {
        id: 1,
        image: IMG1,
        title: "Taraki Employer Portal",
        github: "",
        link: "https://employer.taraki.co/",
      },
      {
        id: 2,
        image: IMG2,
        title: "Taraki Admin Portal",
        github: "",
        link: "https://admin.taraki.co/",
      },
      {
        id: 3,
        image: IMG1,
        title: "Becs",
        github: "",
        link: "http://techyard.io/becs/login",
      },
      {
        id: 4,
        image: IMG2,
        title: "Becs Online Donor",
        github: "",
        link: "http://techyard.io/online-donor/login",
      },
      {
        id: 5,
        image: IMG2,
        title: "Ontute",
        github: "",
        link: "https://www.ontute.io/sign-up",
      },
    ],
    React: [
      {
        id: 1,
        image: IMG3,
        title: "title here for image 3",
        github: "https://github.com",
        link: "https://github.com",
      },
      {
        id: 2,
        image: IMG4,
        title: "title here for image 4",
        github: "https://github.com",
        link: "https://github.com",
      },
    ],
    WordPress: [
      {
        id: 1,
        image: IMG5,
        title: "Mangrove Water Sports",
        github: "",
        link: "https://mws.ae/",
      },
      {
        id: 2,
        image: IMG6,
        title: "Elite Agency",
        github: "",
        link: "https://eliteagcy.com/",
      },
      {
        id: 3,
        image: IMG5,
        title: "Digitix Marketing",
        github: "",
        link: "https://digitixmarketing.com/",
      },
      {
        id: 4,
        image: IMG6,
        title: "Pets Station",
        github: "",
        link: "https://petsstation.ae/",
      },
      {
        id: 5,
        image: IMG5,
        title: "Oii Abu Dhabi",
        github: "",
        link: "https://oiiabudhabi.com/",
      },
      {
        id: 6,
        image: IMG6,
        title: "Jpn Medical Center",
        github: "",
        link: "https://jpnmedicalcenter.com/",
      },
      {
        id: 7,
        image: IMG5,
        title: "Dream Pharmacy",
        github: "",
        link: "https://dreampharmacy.ae/",
      },
      {
        id: 8,
        image: IMG6,
        title: "Plugin Zoo",
        github: "",
        link: "https://pluginszoo.com/",
      },
    ],
    Shopify: [
      {
        id: 1,
        image: IMG5,
        title: "Farada",
        github: "",
        link: "https://farada.ae/",
      },
      {
        id: 2,
        image: IMG6,
        title: "Vivobarefoot",
        github: "",
        link: "https://vivobarefoot.me/",
      },
      {
        id: 3,
        image: IMG6,
        title: "Aetrex",
        github: "",
        link: "https://aetrex.ae/",
      },
      {
        id: 4,
        image: IMG6,
        title: "Seventy7",
        github: "",
        link: "https://seventy7.ae/",
      },
      {
        id: 5,
        image: IMG6,
        title: "Sole Therapy",
        github: "",
        link: "https://soletherapy.ae/",
      },
    ],
  });

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Tab.Group>
        <div className="w-full flex justify-center">
          <Tab.List className="flex space-x-1 w-2/4 rounded-xl bg-blue-400 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white text-black shadow"
                      : "text-black hover:bg-white/[0.12] hover:text-white bg-transparent"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl p-3",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div className="container portfolio__container">
                {posts.map(({ id, image, title, github, link }) => {
                  return (
                    <article key={id} className="portfolio__item">
                      <div className="portfolio__item-image">
                        <img src={image} alt={title} />
                      </div>

                      <h3>{title}</h3>
                      <div className="portfolio__item-cta">
                        {github && (
                          <a href={github} target="__blank" className="btn">
                            Github
                          </a>
                        )}
                        {link && (
                          <a
                            href={link}
                            target="__blank"
                            className="btn btn-primary"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default Portfolio;
