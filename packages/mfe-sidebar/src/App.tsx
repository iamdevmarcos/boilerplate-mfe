import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";

export const App = () => {
  const [isOpen, setIsOpen] = useState(
    JSON.parse(localStorage.getItem("sidebar:isOpen"))
  );

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onOpen = () => {
      setIsOpen(true);
    };

    const onClose = () => {
      setIsOpen(false);
    };

    window.addEventListener("sidebar:onOpen", onOpen);
    window.addEventListener("sidebar:onClose", onClose);
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebar:isOpen", isOpen);
  }, [isOpen]);

  return <Sidebar isOpen={isOpen} onToggle={onToggle} />;
};
