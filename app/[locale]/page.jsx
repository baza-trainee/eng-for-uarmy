import Hero from "./components/Home/Hero/Hero";
import RunningLine from "./components/Home/RunningLine/RunningLine";
import OurProjects from "./components/commonComponents/OurProjects/OurProjects";
import AboutUs from "./components/Home/AboutUs/AboutUs";
import HelpUsGrows from "./components/Home/HelpUsGrow/HelpUsGrow";
import Partners from "./components/Home/Partners/Partners";
import Media from "./components/Home/Media/Media";
import Testimonials from "./components/Home/Testimonials/Testimonials";
import Modal from "./components/Home/Modal/Modal";

const Home = ({searchParams}) => {
  const showModal = searchParams?.modal;
  return (
    <>
      <Hero />
      {/* <RunningLine /> */}
      <Testimonials />
      <OurProjects />
      {/* <AboutUs />
      <HelpUsGrows />
      <Partners />
      <Media /> */}
      {showModal && <Modal />}
    </>
  );
};
export default Home;
