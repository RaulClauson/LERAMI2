import './About.css'
import scrollToSection from '../ScrollTo/index'; // Import the scrollToSection function

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const About = () => {

    const handleLinkClick = (id) => {
        scrollToSection(id);
      };

    useEffect(() => {
        gsap.fromTo(".gsap1", { scale: 1 }, {
            duration: 1, 
            paddingTop: 0,
            scrollTrigger: {
                trigger: ".pin",
                start: "top top",
                end: "bottom top",
                scrub: 2,
            }
        })
        gsap.fromTo(".gsap2", { scale: 1 }, {
            duration: 2, 
            paddingTop: 0,
            scrollTrigger: {
                trigger: ".pin",
                start: "top top",
                end: "bottom top",
                scrub: 4,
            }
        })
        gsap.fromTo(".txt_about", { scale: 1 }, {
            duration: 4, 
            bottom: "15%",
            gap: 0,
            scrollTrigger: {
                trigger: ".pin",
                start: "top top",
                end: "bottom top",
                scrub: 6,
            }
        })
    }, [])

    return (
        <section id='About'>
            <div className='title_about'>
                <p className='gsap1'>LERAMI - Inovando com Código</p>
                <h2 className='gsap2'>Soluções tecnológicas criativas para um futuro conectado.</h2>
            </div>
            <div className='txt_about'>
                <p>Somos a LERAMI, uma startup formada por três estudantes de Análise e Desenvolvimento de Sistemas da FIAP, unidos pela paixão por tecnologia e pela vontade de criar soluções inovadoras. Acreditamos no poder da colaboração e na força da criatividade para transformar ideias em realidade.</p>
                <a onClick={() => handleLinkClick('Projects')} role="link" aria-label="Ir para a sessão Projetos">PROJETOS</a>
            </div>
        </section>
    )
}

export default About