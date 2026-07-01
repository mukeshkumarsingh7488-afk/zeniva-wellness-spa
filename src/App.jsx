import { useEffect } from "react";
import Home from "./pages/Home";
import { BUSINESS } from "./config/business";

export default function App() {
  useEffect(() => {
    document.title = BUSINESS.seo.title;

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    setMeta("description", BUSINESS.seo.description);
    setMeta("keywords", BUSINESS.seo.keywords);

    let theme = document.querySelector('meta[name="theme-color"]');

    if (!theme) {
      theme = document.createElement("meta");
      theme.setAttribute("name", "theme-color");
      document.head.appendChild(theme);
    }

    theme.setAttribute("content", "#170d21");

    document.documentElement.lang = "en";
  }, []);

  return <Home />;
}
