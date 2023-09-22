import Link from 'next/link';
import styles from './SocialMediaMobile.module.scss'
const Facebook = () => {
    return <Link onClick = {(e) => {
    e.currentTarget.blur()
}} href="https://www.facebook.com/ENGforUARMY" target="_blank" rel="noopener noreferrer" className={styles.socialItem}> 
        <svg className={styles.svgIcon} width="70" height="50" viewBox="0 0 70 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_826_7826)">
            <path className={styles.back} d="M31.9501 39H37.6177V26.3968H41.5716L41.9878 22.1812H37.6177C37.6177 22.1812 37.6177 20.6058 37.6177 19.7801C37.6177 18.7805 37.838 18.3894 38.9275 18.3894C39.7966 18.3894 42 18.3894 42 18.3894V14C42 14 38.7684 14 38.0706 14C33.8475 14 31.9501 15.6515 31.9501 18.8023C31.9501 21.5511 31.9501 22.1704 31.9501 22.1704H29V26.4402H31.9501V39Z" fill="#231F20"/>
            </g>
            <defs>
            <clipPath id="clip0_826_7826">
            <rect width="13" height="25" fill="white" transform="translate(29 14)"/>
            </clipPath>
            </defs>
        </svg>
      </Link>
  }

const Youtube =()=>  {
    return <Link onClick = {(e) => {
    e.currentTarget.blur()
}} href="https://www.youtube.com/@engforuarmy/" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
        <svg className={styles.svgIcon} width="70" height="50" viewBox="0 0 72 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={styles.back} fill-rule="evenodd" clip-rule="evenodd" d="M46.9054 16.5696C48.1116 16.8829 49.0525 17.7999 49.3787 18.9711C50.2318 22.3122 50.1762 28.629 49.3966 32.0224C49.074 33.1935 48.1295 34.1071 46.9234 34.4238C43.5181 35.2417 28.2664 35.1408 25.0583 34.4238C23.8521 34.1106 22.9112 33.1935 22.585 32.0224C21.7803 28.8379 21.8359 22.1034 22.5671 18.9885C22.8897 17.8173 23.8342 16.9037 25.0404 16.587C29.5926 15.6647 45.2853 15.9623 46.9054 16.5696ZM34 22L41 25.5L34 29V22Z" fill="#231F20"/>
        </svg>
      </Link>
  }

  
const Instagram =()=> {
    return <Link onClick = {(e) => {
    e.currentTarget.blur()
}} href="https://www.instagram.com/engforuarmy/" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>     
        <svg className={styles.svgIcon} width="70" height="50" viewBox="0 0 72 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_826_7816)">
            <path className={styles.back} d="M42.4609 41H29.5372C24.8296 41 21 37.1704 21 32.4609V19.5372C21 14.8296 24.8296 11 29.5391 11H42.4628C47.1704 11 51.0019 14.8296 51.0019 19.5391V32.4628C51 37.1704 47.1685 41 42.4609 41ZM29.5391 13.5714C26.2493 13.5714 23.5714 16.2474 23.5714 19.5391V32.4628C23.5714 35.7526 26.2474 38.4305 29.5391 38.4305H42.4628C45.7526 38.4305 48.4305 35.7545 48.4305 32.4628V19.5391C48.4305 16.2493 45.7545 13.5714 42.4628 13.5714H29.5391Z" fill="#231F20"/>
            <path className={styles.back} d="M35.9989 33.6823C31.7626 33.6823 28.3169 30.2366 28.3169 26.0003C28.3169 21.764 31.7626 18.3184 35.9989 18.3184C40.2352 18.3184 43.6808 21.764 43.6808 26.0003C43.6808 30.2366 40.2352 33.6823 35.9989 33.6823ZM35.9989 20.8917C33.1804 20.8917 30.8883 23.1837 30.8883 26.0022C30.8883 28.8207 33.1804 31.1128 35.9989 31.1128C38.8174 31.1128 41.1094 28.8207 41.1094 26.0022C41.1094 23.1837 38.8174 20.8917 35.9989 20.8917Z" fill="#231F20"/>
            <path className={styles.back} d="M45.8564 17.8786C45.8564 18.8992 45.0296 19.7241 44.0109 19.7241C42.9904 19.7241 42.1655 18.8973 42.1655 17.8786C42.1655 16.8599 42.9923 16.0332 44.0109 16.0332C45.0296 16.0313 45.8564 16.858 45.8564 17.8786Z" fill="#231F20"/>
            </g>
            <defs>
            <clipPath id="clip0_826_7816">
            <rect width="30" height="30" fill="white" transform="translate(21 11)"/>
            </clipPath>
            </defs>
        </svg>
      </Link>
  }

const Telegram = () => {
    return <Link onClick = {(e) => {
    e.currentTarget.blur()
}} href="https://t.me/ENGforUARMY" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
        <svg className={styles.svgIcon} width="70" height="50" viewBox="0 0 72 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={styles.back} d="M24.3595 25.8537C26.8094 24.5665 29.5574 23.4786 32.1109 22.3908C36.5206 20.6178 40.9304 18.8623 45.4101 17.2392C46.2851 16.9555 47.8418 16.6866 48 17.9243C47.9132 19.6638 47.58 21.4033 47.335 23.1254C46.7401 26.9389 46.0401 30.7363 45.3569 34.5324C45.1288 35.8036 43.467 36.4566 42.4003 35.6364C39.8454 33.9972 37.2906 32.3581 34.7707 30.6855C33.949 29.8826 34.7175 28.7292 35.4539 28.1592C37.5538 26.1855 39.7755 24.4956 41.7717 22.4215C42.3149 21.1838 40.7218 22.2208 40.1968 22.538C37.327 24.4287 34.5271 26.4358 31.4823 28.1084C29.9424 28.9273 28.1225 28.2248 26.5826 27.7738C25.1995 27.2386 23.1696 26.6873 24.3595 25.851V25.8537Z" fill="#231F20"/>
        </svg>
    </Link>
   
  }


const SocialMediaMobile = () => {
    return <ul className={styles.socialMediaList}>
        <li className={styles.socialLi}><Youtube/></li>
        <li className={styles.socialLi}><Instagram/></li>
        <li className={styles.socialLi}><Facebook/></li>
        <li className={styles.socialLi}><Telegram/></li>
    </ul>
}
export default SocialMediaMobile;