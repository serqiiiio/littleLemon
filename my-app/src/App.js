import "./App.css";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import { HeroSection, HighLights } from "./components/Main";
function App() {
  return (
    <div>
      <meta name="Little Lemon" content="A Bolivian restaurant" />
      <meta name="og:title" content="Little Lemon" />
      <meta name="og:description" content="A place to eat top Bolivian Food" />
      <Navbar />
      <HeroSection />
      <HighLights />
      <Footer />
    </div>
  );
}

export default App;
