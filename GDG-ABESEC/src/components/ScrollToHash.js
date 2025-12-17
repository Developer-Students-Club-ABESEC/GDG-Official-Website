import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);

        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 100);
  }, [pathname, hash]);

  return null;
}
