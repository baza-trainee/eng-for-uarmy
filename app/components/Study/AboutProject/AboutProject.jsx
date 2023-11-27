import styles from './AboutProject.module.scss';

const AboutProject = () => {
    return <div className={styles.section}>
        <h2 className={styles.title}>ENG for UARMY YouTube Video Course</h2>
        <ul className={styles.projectList}>
            <li className={styles.projectItem}>
                <h3 className={styles.projectItemTitle}>NATO-ready</h3>
                <p className={styles.projectItemDesc}>Based on the STANAG 6001 language standard</p>
            </li>
            <li className={styles.projectItem}>
                <h3 className={styles.projectItemTitle}>Field-tested</h3>
                <p className={styles.projectItemDesc}>Custom-made for the Ukrainian soldiers’ needs</p>
            </li>
            <li className={styles.projectItem}>
                <h3 className={styles.projectItemTitle}>Digestible format</h3>
                <p className={styles.projectItemDesc}>Short videos with fundamentals and military vocab</p>
            </li>
            <li className={styles.projectItem}>
                <h3 className={styles.projectItemTitle}>Self-paced</h3>
                <p className={styles.projectItemDesc}>Study as slowly or as fast as you’d like, anytime and anywhere</p>
            </li>
        </ul>
    </div>
}
export default AboutProject