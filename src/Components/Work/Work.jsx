import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const LiIcon = ({ reference }) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ['center end', 'center center'],
    });

    return (
        <figure className="absolute left-0 stroke-[#5c9ead]">
            <svg
                className="transform -rotate-90"
                width="75"
                height="75"
                viewBox="0 0 100 100"
            >
                <circle
                    cx="75"
                    cy="50"
                    r="20"
                    className="stroke-[#0f1624] stroke-1 fill-none"
                />
                <motion.circle
                    style={{ pathLength: scrollYProgress }}
                    cx="75"
                    cy="50"
                    r="20"
                    className="stroke-[5px] fill-[#0f1624]"
                />
                <circle
                    cx="75"
                    cy="50"
                    r="10"
                    className="animate-pulse stroke-1 fill-[#fff]"
                />
            </svg>
        </figure>
    );
};

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
            >
                <h3 className="capitalize font-bold text-2xl">
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        className="capitalize"
                        target="_blank"
                    >
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75">
                    {time} | {address}
                </span>
                <p className="font-medium w-full">{work}</p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start'],
    });

    return (
        <section id="experience">
            <h5>Where Have I Worked</h5>
            <h2>My Experience</h2>

            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-white origin-top"
                />

                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details
                        position="Web Designer & Developer"
                        company="Sahulaat Technology"
                        companyLink="www.sahulaat.com"
                        time="Jan 2022 - Present"
                        address="Abu Dhabi, UAE"
                        work="Engineered advanced and custom-coded e-commerce stores with Shopify and WooCommerce, pushing beyond industry standards.
                        Elevated the customer journey through seamless payment gateways and optimized SEO strategies, resulting in heightened visibility and
                        organic traffic. Orchestrated end-to-end project management, ensuring punctual delivery, client satisfaction, and ongoing professional
                        development in React and Nest JS."
                    />

                    <Details
                        position="Frontend Developer"
                        company="Consolices"
                        companyLink="www.Consolices.com"
                        time="2020 - Present"
                        address="Lahore, Pakistan"
                        work="Transform design concepts into visually appealing interfaces with Angular, Tailwind CSS, and Bootstrap, ensuring seamless usability. Established effective communication between front-end and back-end systems, implementing Rest APIs and GraphQL. Actively pursued continuous learning, gaining proficiency in GraphQL and Rest API, and contributed to WooCommerce projects for enhanced website capabilities."
                    />

                    <Details
                        position="Frontend Web Developer"
                        company="PFirst Solutions"
                        companyLink="#"
                        time="2019 - 2021"
                        address="Islamabad, Pakistan"
                        work="I seamlessly translated design concepts into functional code, ensuring efficient integration between front-end and back-end systems, leading to a 15% increase in project efficiency. Leveraging advanced WordPress skills, I designed and customized websites, contributing to a 20% increase in client satisfaction through tailored and visually appealing web solutions. Proactive in continuous improvement, I played a key role in reducing technical debt by 30% and enhancing overall codebase quality."
                    />

                </ul>
            </div>
        </section>
    );
};

export default Experience;