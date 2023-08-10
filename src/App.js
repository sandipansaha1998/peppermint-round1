import "./App.css";
import Navbar from "./components/Navbar";
import { MainCarousel } from "./components/Carousel/MainCarousel";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./components/About";
import JobCategory from "./components/JobCategory/JobCategory";
import JobPanel from "./components/Jobs/JobPanel";
function App() {
  return (
    <div className="App">
      <Navbar />
      <main
        className="d-flex flex-column gap-5"
        style={{
          top: "80px",
          position: "relative",
          color: "black",
          margin: " 0px 0px 0px 0px",
          backgroundColor: "#4cb6d5",
        }}
      >
        {/* <h2 className="fw-bold">Careers</h2> */}
        <About />
        <h3 className="fw-bold">Discover Jobs</h3>
        <JobCategory />
        <MainCarousel />
        <JobPanel />
      </main>
    </div>
  );
}

export default App;
