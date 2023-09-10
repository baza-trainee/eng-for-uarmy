import styles from "./page.module.css";
import PrimaryButton from "./components/commonComponents/PrimaryButton/PrimaryButton";
import Hero from "./components/commonComponents/Hero/Hero";
export default function Home() {
  return (
    <div className={styles.main}>
      <h1>HomePage</h1>
      <Hero></Hero>
      <PrimaryButton name="Start Studying" />
    </div>
  );
}
