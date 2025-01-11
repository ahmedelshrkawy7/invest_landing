import "./App.css";
import Header from "./components/Header";
import NavigationBar from "./components/Navigation";
import HeroSection from "./components/Hero";
import About from "./components/About";
import Video from "./components/Video";
import HowItWorks from "./components/HowItWorks";
import TokenSale from "./components/TokenSale";
import OutTeem from "./components/OutTeem";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <>
      <Header />
      <NavigationBar />
      <HeroSection />
      <About />
      {/* <Video /> */}
      <HowItWorks />
      {/* <TokenSale /> */}
      <Roadmap />
      {/* <OutTeem /> */}
    </>
  );
}

export default App;
