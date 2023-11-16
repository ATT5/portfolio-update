import {
  github,
  external,
  react,
  next,
  taco,
  pokemon,
  space,
  nike,
} from "../assets";
import { motion } from "framer-motion";

const projects = {
  taco: {
    title: "Taco Life",
    description: "Landing page: React and Tailwind CSS.",
    img: taco,
    github: "https://github.com/ATT5/Taco-life",
    demo: "https://taco-life.netlify.app/",
    icon: react,
  },
  pokemon: {
    title: "AIP Pokemon Card Game",
    description: "Pokémon API, React and Tailwind CSS. ",
    img: pokemon,
    github: "https://github.com/ATT5/pokemon-memory-game",
    demo: "https://thepokemonmemory.netlify.app/",
    icon: react,
  },
  nike: {
    title: "Nike Store",
    description: "E-commerce: React and Tailwind CSS.",
    img: nike,
    github: "https://github.com/ATT5/nike-page",
    demo: "https://nike-ab.netlify.app/",
    icon: react,
  },
  space: {
    title: "Space Page",
    description: "Multi-page: Nextjs",
    img: space,
    github: "https://github.com/ATT5/frontMentor-space-page",
    demo: "https://explore-space-page.netlify.app/",
    icon: next,
  },
};

const Links = ({ link, img }) => (
  <motion.li whileHover={{ scale: 1.1 }}>
    <a href={link} target="_blank">
      <img src={img} alt="link" width={40} height={40} />
    </a>
  </motion.li>
);

function Projects() {
  return (
    <>
      <h3 className="text-4xl text-lightGray text-center font-poppi font-bold pb-8">
        Projects |
      </h3>
      <section className=" grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 gap-y-20 font-poppi text-lightGray mb-10">
        {Object.values(projects).map((pj) => (
          <motion.div
            whileInView={{ scaleX: [0, 1] }}
             transition={{ duration: 1, ease: "easeInOut", repeat: null }}
            viewport={{ once: true }}
            key={pj.title}
            className="relative w-full h-96 rounded-xl overflow-hidden"
          >
            <motion.img
              src={pj.img}
              alt={pj.title}
              className="w-full relative z-0 h-full object-center object-cover rounded-xl"
              whileHover={{ scale: 1.2 }}
            />
            <div className="w-full h-[100px]  absolute bottom-0 z-30 bg-[#1f1f36] bg-opacity-60 backdrop-filter backdrop-blur-lg ">
              <p className="text-2xl  pl-5 mt-5 ">{pj.title}</p>
              <p className="w-5/6 pl-5 absolute z-0 pb-2">{pj.description}</p>
              <ul className="flex md:gap-3 absolute  z-30 right-1">
                <Links link={pj.github} img={github} />
                <Links link={pj.demo} img={external} />
              </ul>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
}

export default Projects;

{
  /* <>
      {Object.values(projects).map((pj) => (
        <motion.article
          className="text-lightGray flex lg:justify-between items-center mx-7 py-7 font-space flex-col-reverse lg:flex-row border-b-[1px] border-gray-400"
          key={pj.title}
          initial={{ x: "100%" }}
          whileInView={{ x: ["-100%", "0%"] }}
          transition={{ duration: 0.8, ease: "easeIn", repeat: null }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-1/2  ">
            <h3 className="text-4xl mb-5  text-lightGray font-extrabold">
              {pj.title}
            </h3>
            <p className="mb-5 leading-7 text-xl">{pj.description}</p>
            <img
              src={pj.icon}
              alt="icon"
              width={50}
              height={50}
              className="mb-5"
            />
            <ul className="flex gap-5">
              <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
                <a href={pj.github} target="_blank">
                  <img src={github} alt="github" width={50} height={50} />
                </a>
              </motion.li>
              <motion.li initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
                <a href={pj.demo} target="_blank">
                  <img src={external} alt="link" width={50} height={50} />
                </a>
              </motion.li>
            </ul>
          </div>
          <img
            src={pj.img}
            alt={pj.title}
            className="w-[500px] h-96 rounded-2xl max-lg:mb-9 object-cover"
          />
        </motion.article>
      ))}
    </> */
}
