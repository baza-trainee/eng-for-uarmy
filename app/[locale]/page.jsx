<<<<<<< Updated upstream
import Hero from "./components/Home/Hero/Hero";
import HelpUsGrows from "./components/Home/HelpUsGrow/HelpUsGrow";
import OurProjects from "./components/commonComponents/OurProjects/OurProjects";
import AboutUs from "./components/Home/AboutUs/AboutUs";
import Partners from "./components/Home/Partners/Partners";
import RunningLine from "./components/Home/RunningLine/RunningLine";

const Home = () => {
  return <>
    <Hero />
    <RunningLine/>
    <OurProjects />
    <AboutUs />
    <HelpUsGrows />
    <Partners />
</>
=======
import styles from "./page.module.css";
import PrimaryButton from "./components/commonComponents/PrimaryButton/PrimaryButton";
import Testimonials from "./components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>HomePage</h1>
      <Testimonials />
      <PrimaryButton name="Start Studying" />
    </div>
  );
>>>>>>> Stashed changes
}
export default Home;
