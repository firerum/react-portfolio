import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-sm sm:grid sm:grid-cols-3 lg:grid-cols-4 leading-6">
      <Hero />
      <div className="sm:col-span-2 border-l border-r border-gray-300">
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
