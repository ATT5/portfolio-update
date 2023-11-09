import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { vapor } from "../assets";

const MainPresentation = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["0%", "33%", "66%", "100%"]
  );
  const pX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["0%", "-53%", "-106%", "-160%"]
  );
  const pz = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["0%", "-20%", "-40%", "-100%"]
  );

  return (
    <section
      ref={targetRef}
      className="w-full font-space font-bold max-w-[100vw] "
    >
      <div
        className={`w-full h-[300vh] md:h-[300vh] bg-[#12121c]  flex flex-col max-md:bg-[10%]`}
        style={{
          backgroundImage: `url(${vapor})`,
          backgroundSize: "cover",
        }}
      >
        <motion.p
          className=" text-[#F7F7F7] text-9xl  sticky top-36  text-end max-md:text-7xl z-20   "
          style={{ x: pz }}
        >
          Hello <br /> I'm Arturo <br />
        </motion.p>

        <p className="text-[#F7F7F7] text-3xl md:text-4xl font-normal w-2/3 md:w-1/3 h-[200px] self-start sticky top-96 md:top-[27rem] pl-5 md:mb-20 lg:mb-0">
          A passionate Front-end React Developer based in Mexico
        </p>
      </div>

      {/* Horizontal scroll  */}
      <motion.div
        className="w-full h-screen  fixed top-0  overflow-hidden bg-[#EEEEEE]  z-30"
        style={{ x }}
      >
        <motion.p
          className="text-9xl text-[#12121c] mt-36  text-end max-md:text-7xl"
          style={{ x: pX }}
          animate={{ y: ["-100%", "0%"], opacity: [0, 0.5, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Hello <br /> I'm Arturo
        </motion.p>
        <motion.p
          className=" text-3xl text-[#12121c] max-md:pt-36 md:text-5xl font-normal pl-5"
          style={{ x: pX }}
          animate={{ y: ["100%", "0%"], opacity: [0, 0.5, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Front end <br /> Web developer <br /> Portfolio®
        </motion.p>
      </motion.div>
    </section>
  );
};

export default MainPresentation;
