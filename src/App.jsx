import { Routes, Route, useLocation } from "react-router-dom";
import UniformFront from "./design/soccer/UniformFront";
import UniformBack from "./design/soccer/UniformBack";
import { AnimatePresence } from "framer-motion";
import Layout from "./design/Layout";
import CanvasModel from "./canvas";

function App() {
  const location = useLocation();
  return (
    <CanvasModel>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<UniformFront />} />
            <Route path="uniformback" element={<UniformBack />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </CanvasModel>
  );
}

export default App;
