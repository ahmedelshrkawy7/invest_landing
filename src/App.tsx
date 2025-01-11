import "./App.css";
import Header from "./components/Header";
import NavigationBar from "./components/Navigation";
import HeroSection from "./components/Hero";
import About from "./components/About";
import Video from "./components/Video";
import HowItWorks from "./components/HowItWorks";
import Roadmap from "./components/Roadmap";
import HowToStart from "./components/HowtoStart";

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
      <HowToStart />
    </>
  );
}

export default App;
