
import HelpUsGrows from "./components/Home/HelpUsGrow/HelpUsGrow";
import PrimaryButton from "./components/commonComponents/PrimaryButton/PrimaryButton";
import Hero from "./components/commonComponents/Hero/Hero";

const Home = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Hero></Hero>
      <HelpUsGrows />
      <PrimaryButton name="Start Studying" />
    </>
  );

}

export default Home;
