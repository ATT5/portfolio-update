// prettier-ignore
import { css, javascript, html, react, redux, next, tail, instagram, github, linkin, codingx} from "../assets";
import { motion } from "framer-motion";

const icons = [html, css, javascript, react, redux, next, tail];

const links = {
  instagram: {
    img: instagram,
    link: "https://www.instagram.com/arturo.baylon/",
  },
  github: { img: github, link: "https://github.com/ATT5" },
  linkin: {
    img: linkin,
    link: "https://www.linkedin.com/in/arturo-baylon-931689277/",
  },
};

const Skills = () => {
  return (
    <>
      <section
        id="about"
        className=" text-lightGray font-poppi flex justify-between px-5 flex-col max-lg:items-center lg:flex-row overflow-hidden "
      >
        <motion.div
          className="w-[90%] lg:w-1/2 rounded-2xl  bg-[#151520] hover:bg-[#1b1b29] p-5 mb-8 "
          initial={{ x: "100%" }}
          whileInView={{ x: ["-100%", "0%"] }}
          transition={{ duration: 0.8, ease: "easeIn", repeat: null }}
          viewport={{ once: true }}
        >
          <h4 className="text-5xl">
            <span className="text-blue-300">Front-End</span> Developer
          </h4>
          <p className="leading-9 pt-6 text-xl mb-8 ">
            Hi, I'm Arturo Baylon, a Front-End Developer and Electromechanical
            engineer driven to build responsive websites with user-centric
            experiences. I channel my passion for coding into crafting clean,
            optimized code that follows the best practices in industry, ensuring
            top-notch solutions.
          </p>
          <ul className="flex mb-8 gap-6">
            {Object.values(links).map((lk) => (
              <motion.li
                key={`${lk.img}`}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <a href={lk.link} target="_blank">
                  <img src={lk.img} alt={`${lk.img}`} width={40} height={40} />
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.img
          src={codingx}
          alt="computer"
          className="w-[450px] h-4/6 rounded-2xl "
          initial={{ x: "100%" }}
          whileInView={{ x: ["100%", "0%"] }}
          transition={{ duration: 0.8, ease: "easeIn", repeat: null }}
          viewport={{ once: true }}
        />
      </section>
      {/* skills  */}
      <div className=" text-lightGray px-5">
        <h4 className="text-4xl text-center font-bold pt-20">Tech Stack |</h4>
        <ul className="flex justify-center md:gap-4 py-12 ">
          {icons.map((icon) => (
            <motion.li
              key={`${icon}`}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={icon} alt={`${icon}`} width={70} height={70} />
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;
