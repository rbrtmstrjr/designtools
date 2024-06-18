import { Route, Routes } from "react-router-dom";
import Tools from "./assets/components/Tools";
import Navigation from "./assets/components/Navigation";
import Usefulsite from "./assets/components/Usefulsite";
import Notes from "./assets/components/Notes";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/designtools" element={<Tools />} />\
        <Route path="/links" element={<Usefulsite />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  );
}
