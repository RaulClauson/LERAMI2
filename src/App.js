import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Loading from "./Components/Loading_Ani";
import Menu from "./Components/Menu";
import Projects from "./Components/Projects";
import Team from "./Components/Team";
import Texture from "./Components/Texture";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    const elements = gsap.utils.toArray(".ani_visible");

    elements.forEach((element, index) => {
      gsap.fromTo(element, { opacity: 0, transform: "translateY(70px)" }, {
        scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "top 10%",
            toggleActions: "restart none none reverse",
        },
        duration: 0.8, 
        delay: index * 0.1,
        opacity: 1,
        transform: "translateY(0px)",
        ease: "power4.out",
      })
    })
  }, [])

  return (
    <div className="App">
      <Texture></Texture>
      <Loading></Loading>
      <Menu></Menu>
      <Home></Home>
      <About></About>
      <Projects
        titulo='Projetos'
        texto='Aqui você confere os projetos que desenvolvemos juntos, demonstrando nossa paixão por tecnologia e capacidade de criar soluções inovadoras.'
      />
      <Team></Team>
      <Footer></Footer>
    </div>
  );
}

export default App;