
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Version1 from "./pages/Version1";
import Version2 from "./pages/Version2";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/version1" element={<Version1 />} />
          <Route exact path="/version2" element={<Version2 />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
