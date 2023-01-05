import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContMob from "./pages/ContMob";
import Mobile from "./pages/Mobile";
import ContDesk from "./pages/ContDesk";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/contmob":
        title = "";
        metaDescription = "";
        break;
      case "/mobile":
        title = "";
        metaDescription = "";
        break;
      case "/contdesk":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/contmob" element={<ContMob />} />

      <Route path="/mobile" element={<Mobile />} />

      <Route path="/contdesk" element={<ContDesk />} />
    </Routes>
  );
}
export default App;
