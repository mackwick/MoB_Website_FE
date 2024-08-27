import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Scotopia from "./pages/Scotopia";
import WilmRecon from "./pages/WilmRecon";
import Quilt from "./pages/QuiltStories";
import Opioid from "./pages/Opioid";
import OakGrove from "./pages/OakGrove";

//ROUTER
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/getinvolved" element={<Contact />} />
      <Route path="/scotopia" element={<Scotopia />} />
      <Route path="/wilmingtonreconstructed" element={<WilmRecon />} />
      <Route path="/quiltstories" element={<Quilt />} />
      <Route path="/opioidvoices" element={<Opioid />} />
      <Route path="/oakgrovecemeteryproject" element={<OakGrove />} />
    </Route>
  )
);

export default router;
