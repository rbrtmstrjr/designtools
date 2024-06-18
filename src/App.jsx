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
        <Route path="/designtools/links" element={<Usefulsite />} />
        <Route path="/designtools/notes" element={<Notes />} />
      </Routes>
    </>
  );
}
