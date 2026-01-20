import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Projects from './components/project/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import useTheme from "./hooks/useTheme";
import ThemeToggle from "./components/toggle/ThemeToggle";


const App = () => {
  const [theme, setTheme] = useTheme();

  return (
    <>
      <Header />
      <Projects />
      <Nav theme={theme} setTheme={setTheme} />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};


export default App