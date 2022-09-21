import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Modal({ show, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => setIsBrowser(true), []);

  const modalContent = (
    <motion.div
      animate={{
        opacity: show ? 1 : 0,
        visibility: show ? "visible" : "hidden",
      }}
      transition={{ duration: 0.2, ease: "backInOut" }}
      initial={{ opacity: 0, z: 0, visibility: "hidden" }}
      className={`fixed h-full right-0 bottom-0  w-full top-0 left-0 bg-black bg-opacity-50 overflow-hidden z-50`}
    >
      <div className="flex items-center justify-center h-full md:my-auto">
        {children}
      </div>
    </motion.div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
