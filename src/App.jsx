import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/About'
import Experience from './components/experinece/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";
import { Trans } from 'react-i18next';



const App = () => {

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };


  return (
    <>
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{

        detectRetina: false,
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true
          }
        },
        particles: {
          color: {
            value: "#fff"
          },
          number: {
            density: {
              enable: true,
              area: 1080
            },
            limit: 0,
            value: 400
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 1,
              sync: false
            },
            random: {
              enable: true,
              minimumValue: 0.05
            },
            value: 1
          },
          shape: {
            type: "circle"
          },
          size: {
            random: {
              enable: true,
              minimumValue: 0.5
            },
            value: 1
          }
        }
      }}
    />
    <Trans/>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App

