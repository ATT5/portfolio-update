import { code, menu, x } from "../assets";
import Modal from "../components/Modal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
const navBar = {
  about: { title: "ABOUT", link: "#about" },
  projects: { title: "PROJECTS", link: "#projects" },
  contact: { title: "CONTACT", link: "#contact" },
};

const Nav = () => {
  const [open, setOpen] = useState(false);

  const openHandler = () => setOpen((evt) => !evt);

  return (
    <header className="  w-full  h-16  absolute z-40  max-md:w-10  max-md:right-5 max-md:top-5  max-md:bg-[#EEEEEE]">
      <nav className=" flex justify-between px-8 pt-4 items-center max-md:hidden ">
        <div className="rounded-full bg-black p-1">
          <img src={code} alt="code" width={30} height={30} />
        </div>
        <ul className=" flex gap-8 font-quick ">
          {Object.values(navBar).map((it) => (
            <li
              key={it.title}
              className=" cursor-pointer text-xl hover:text-gray-400"
            >
              <a href={it.link}>{it.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      {/*Mobile menu */}

      <img
        src={menu}
        alt="menu"
        width={70}
        height={70}
        className="cursor-pointer hidden max-md:block "
        onClick={openHandler}
      />
      <AnimatePresence>
        {open && (
          <Modal>
            <nav className=" md:hidden  h-screen w-2/3 flex flex-col bg-lightGray ">
              <img
                src={x}
                alt="close"
                className="w-16 h-16 self-end "
                onClick={openHandler}
              />
              <ul className=" flex gap-8 font-quick flex-col self-center pt-24  text-black font-bold">
                {Object.values(navBar).map((it) => (
                  <li
                    key={it.title}
                    className=" cursor-pointer text-xl hover:text-gray-400"
                    onClick={openHandler}
                  >
                    <a href={it.link}>{it.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </Modal>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
