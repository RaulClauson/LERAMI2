import './Home.css';
import Scroll from '../Home/svgs/Scroll';
import scrollToSection from '../ScrollTo/index'; // Import the scrollToSection function

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    const handleLinkClick = (id) => {
        scrollToSection(id);
      };

    useEffect(() => {
        gsap.fromTo(".image", { scale: 1 }, {
            duration: 1, 
            width:"99%",
            height:"100%",
            bottom:0,
            borderRadius:0,
            scrollTrigger: {
                trigger: ".pin",
                start: "top top",
                end: "bottom top",
                scrub: 2,
            }
        })
        gsap.fromTo(".blur", { scale: 1 }, {
            duration: 1, 
            width:"100%",
            height:"140%",
            bottom:"-39%",
            borderRadius:0,
            backdropFilter: "blur(5vh)",
            scrollTrigger: {
                trigger: ".pin",
                start: "top top",
                end: "bottom top",
                scrub: 2,
            }
        })
    }, [])


    return (
        <section id='Home'>
            <div className='pin'>
                <div className='blur'></div>
                <h1>Desenvolvemos soluções que fazem a diferença.</h1>
                <div className='image'></div>
                <div className='image_blur'></div>
                <a onClick={() => handleLinkClick('About')} role="link" aria-label="Ir para a sessão Sobre" className='scroll_down'><Scroll></Scroll></a>
            </div>
        </section>
    )
}

export default Home