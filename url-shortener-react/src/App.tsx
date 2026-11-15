import Boost from "./components/Boost";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <Header />
      <ThemeToggle />
      <Hero />
      <Features />
      <Boost title="Boost Your Links Today"/>
      <Footer />
    </>
  );
}

export default App;
