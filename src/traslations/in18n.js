import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          header:{
              part1: "Hello I'm",
              part2: "Web Developer",
              btn1: "Download CV",
              btn2: "Let's Talk!",
              Scroll: "Scroll Down"
          },
          about: {
              part1:"Get to Know",
              part2: "Aboout Me",
              box1:"Experience",
              subBox1:"3+ Year Working",
              box2:"Clients",
              subBox2:"200+ Worldwide",
              box3:"Projects",
              subBox3:"80+ Completed",
              text:"My knowledge and experiences have been self-taught on an online platform as well as in professional certification places in which I have learned web design and Front-End. I handle frameworks like Bootstrap 4 and the use of SASS in CSS. I have experience working with the Wordpress, Shopify and Magento platform. I have knowledge in React and continually update my album of skills with new and different coding methods thus being at the forefront of the subject.",
              btn:"Let's Talk!"
          },
          testimonial:{
            part1:"Review from clients",
            part2:"Testimonial",
            test1:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nulla cupiditate vel odio provident fugiat. Maiores assumenda perferendis distinctio excepturi porro veritatis pariatur reprehenderit labore debitis quas! Earum unde aliquam aut, officiis sint, quidem distinctio tempora ab suscipit voluptas excepturi!",
            test2:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nulla cupiditate vel odio provident fugiat. Maiores assumenda perferendis distinctio excepturi porro veritatis pariatur reprehenderit labore debitis quas! Earum unde aliquam aut, officiis sint, quidem distinctio tempora ab suscipit voluptas excepturi!",
            test3:"Doy fe",
            test4:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nulla cupiditate vel odio provident fugiat. Maiores assumenda perferendis distinctio excepturi porro veritatis pariatur reprehenderit labore debitis quas! Earum unde aliquam aut, officiis sint, quidem distinctio tempora ab suscipit voluptas excepturi!",
            test5:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nulla cupiditate vel odio provident fugiat. Maiores assumenda perferendis distinctio excepturi porro veritatis pariatur reprehenderit labore debitis quas! Earum unde aliquam aut, officiis sint, quidem distinctio tempora ab suscipit voluptas excepturi!"
          }
        }
      },
      es:{
          translation:{
            header:{
                part1: "Hola Soy",
                part2: "Desarrollador Web",
                btn1: "Descarga CV",
                btn2: "Hablemos!",
                Scroll: "Mover Hacia Abajo"
            },
            about: {
              part1:"Llegar a saber",
              part2: "Sobre Mi",
              box1:"Experiencia",
              subBox1:"3+ Años trabajando",
              box2:"Clients",
              subBox2:"200+ En todo el Mundo",
              box3:"Proyectos",
              subBox3:"80+ Completados",
              text:"Mis conocimientos y experiencias han sido autodidactas en una plataforma online al igual que en lugares de certificacion profecional en las cuales he aprendido diseño web y Front-End. Manejo frameworks como Bootstrap 4 y la utilizacion de SASS en CSS. Poseo expreinecia trabajanmdo con la plataforma de Wordpress, Shopify y Magento. Tengo conosimiento en React y continuamente actualizo mi album de habilidades con nuevos y distintos metodos de codigo estando asi a la vanguardia en el tema.",
              btn:"Hablemos!"
          },
          testimonial:{
            part1:"Review de los clientes",
            part2:"Testimonios",
            test1:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nulla cupiditate vel odio provident fugiat. Maiores assumenda perferendis distinctio excepturi porro veritatis pariatur reprehenderit labore debitis quas! Earum unde aliquam aut, officiis sint, quidem distinctio tempora ab suscipit voluptas excepturi!",
            test2:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nulla cupiditate vel odio provident fugiat. Maiores assumenda perferendis distinctio excepturi porro veritatis pariatur reprehenderit labore debitis quas! Earum unde aliquam aut, officiis sint, quidem distinctio tempora ab suscipit voluptas excepturi!",
            test3:"Doy fe en ingles",
            test4:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nulla cupiditate vel odio provident fugiat. Maiores assumenda perferendis distinctio excepturi porro veritatis pariatur reprehenderit labore debitis quas! Earum unde aliquam aut, officiis sint, quidem distinctio tempora ab suscipit voluptas excepturi!",
            test5:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nulla cupiditate vel odio provident fugiat. Maiores assumenda perferendis distinctio excepturi porro veritatis pariatur reprehenderit labore debitis quas! Earum unde aliquam aut, officiis sint, quidem distinctio tempora ab suscipit voluptas excepturi!"
          }
          }
      }
    }
  });

export default i18n;