import { mail, instagram, linkin } from "../assets";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer
      className=" bg-[#1d1d2c] text-lightGray font-space px-5 py-14"
      id="contact"
    >
      <h5 className="text-4xl pb-4">Contact me:</h5>
      <div className="flex gap-2">
        <img src={mail} alt="e-mail" width={20} height={20} />
        <p>arturobc95@gmail.com</p>
      </div>
      <p>Copyright © 2023. All rights are reserved</p>
      <p>Designed by Arturo Baylon💻</p>

      <div className="flex absolute right-5 ">
        <motion.a
          href="https://www.instagram.com/arturo.baylon/"
          whileHover={{ scale: 1.1 }}
        >
          <img src={instagram} alt="instagram" width={40} height={40} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/arturo-baylon-931689277/"
          whileHover={{ scale: 1.1 }}
        >
          <img src={linkin} alt="link" width={40} height={40} />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
