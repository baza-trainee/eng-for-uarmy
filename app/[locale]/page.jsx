import Hero from "./components/Home/Hero/Hero";
import HelpUsGrows from "./components/Home/HelpUsGrow/HelpUsGrow";
import OurProjects from "./components/commonComponents/OurProjects/OurProjects";
import AboutUs from "./components/Home/AboutUs/AboutUs";
import Partners from "./components/Home/Partners/Partners";
import RunningLine from "./components/Home/RunningLine/RunningLine";

const Home = () => {
  return <>
    <Hero />
    <OurProjects />
    <RunningLine/>
    <AboutUs />
    <HelpUsGrows />
    <Partners />
</>
}
export default Home;
