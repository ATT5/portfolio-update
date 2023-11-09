import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const portalElement = document.getElementById("modal");

const Modal = ({ children }) => {
  return (
    <>
      {createPortal(
        <motion.div
          className="fixed top-0 left-0 z-50 h-screen w-full  flex justify-end bg-x  "
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: [0, 0.3, 0.6, 1] }}
          transition={{ stagger: 0 }}
          exit={{ x: 80, opacity: 0 }}
        >
          {children}
        </motion.div>,
        portalElement
      )}
    </>
  );
};

export default Modal;
