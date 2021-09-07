import { useEffect, useState } from "react";

import { Navbar } from "./components/Navbar";

export const App = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("auth:user")) || null
  );

  const onOpenSidebar = () => {
    const event = new CustomEvent("sidebar:onOpen");
    window.dispatchEvent(event);
  };

  useEffect(() => {
    const onSignIn = (e) => {
      if (e?.detail?.user) {
        console.log("user", e.detail.user);
        setUser(e.detail.user);
      }
    };
    window.addEventListener("auth:onSignIn", onSignIn);
  }, []);

  return <Navbar onOpenSidebar={onOpenSidebar} user={user} />;
};
