import "./styles/App.css";
import Navbar from "./components/Navbar";
import { MainCarousel } from "./components/Carousel/MainCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import InfoIcon from "@mui/icons-material/Info";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import WorkIcon from "@mui/icons-material/Work";
import About from "./components/About";
import JobCategory from "./components/JobCategory/JobCategory";
import JobPanel from "./components/Jobs/JobPanel";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
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
        <Paper
          className="d-block d-md-none "
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            style={{ backgroundColor: "black", color: "white" }}
          >
            <BottomNavigationAction
              className="text-light"
              label="Home"
              icon={<HomeIcon />}
            />
            <BottomNavigationAction
              className="text-light"
              label="About Us"
              icon={<InfoIcon />}
            />
            <BottomNavigationAction
              className="text-light"
              label="Solutions"
              icon={<EmojiObjectsIcon />}
            />
            <BottomNavigationAction
              className="text-light"
              label="Products"
              icon={<PrecisionManufacturingIcon />}
            />
            <BottomNavigationAction
              className="text-light"
              label="Career"
              icon={<WorkIcon />}
            />
          </BottomNavigation>
        </Paper>
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
