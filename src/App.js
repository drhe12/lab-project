import logo from "./logo.svg";
import "./App.css";
import Principal from "./components/BannerSection";

// Argon
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-design-system-react.css";
import Slider from "./components/Slider";
import InfoSection from "./components/InfoSection";

function App() {
  return (
    <>
      <Slider />
      <Principal />
      <InfoSection />
    </>
  );
}

export default App;
