import Topbar from  "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import Testimonials from "./components/testimonials/Testimonials"
import "./app.scss"
import { useState } from "react";
import Menu  from "./components/menu/Menu";



function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu/>
      <div className="sections">
        <Intro/> 
        <Portfolio/>
        <Works/>
        <Contact/>
        <Testimonials/>
      </div>
    </div>
  );
}

export default App;
