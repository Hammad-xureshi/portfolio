import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './context/ThemeContext';
import { testimonials } from './data/portfolioData';

function App() {
  const { darkMode } = useTheme();

  return (
    <div className="min-h-screen bg-dark-400 text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {testimonials && testimonials.length > 0 && <Testimonials />}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;