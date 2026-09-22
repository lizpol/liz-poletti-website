import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useLayoutEffect(() => {
    // Take full control — prevent browser from restoring previous scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (hash) {
      const timeout = window.setTimeout(() => {
        let id = hash.slice(1);
        try { id = decodeURIComponent(id); } catch { /* Treat malformed encoding as a literal ID. */ }
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
        }
      }, 50);
      return () => window.clearTimeout(timeout);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash, key]);

  return null;
}
