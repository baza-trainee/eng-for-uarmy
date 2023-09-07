import styles from "./page.module.css";
import PrimaryButton from "./components/commonComponents/PrimaryButton/PrimaryButton";
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>HomePage</h1>
      <PrimaryButton name="Start Studying" />
    </main>
  );
}
