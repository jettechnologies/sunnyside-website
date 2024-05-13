import About from "./sections/About";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Testimony from "./sections/Testimony";

const App = () => {
  return (
    <main className="max-container min-h-screen barlow ">
      <Header />
      <div className="w-full min-h-screen">
        <Hero />
        <About />
      </div>
      <Services />
      <Testimony />
      <Projects />
    </main>
  )
}

export default App