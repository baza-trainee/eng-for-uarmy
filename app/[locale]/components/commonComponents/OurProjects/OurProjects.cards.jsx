import Link from 'next/link';
import Image from 'next/image'
import { SvgBorder } from './SvgBorder';
import "./OurProjects.styles.scss"




export const Project1 = ({t})=>{

   
   
    console.log(t);

    return (
    <>
        <li className='our-projects-card'>
            <SvgBorder />
            <Image className='card-img' src="/OurProjects/Rectangle.png" alt="Image" width={359} height={236} />
                <div className='text-cont'>
                <h3 className='card-head'>{t("youtube")}</h3>
                <p className='card-text'>{t("youtube-desc")}</p>
                <Link href={`https://www.youtube.com/@engforuarmy`} className="card-button">{t("learnMore")}</Link>
                
            </div>
    </li>
    </>
    )
}

export const Project2 = ({t, locale})=>{

    return (
    <>
        <li className='our-projects-card'>
            <SvgBorder />
            <Image className='card-img' src="/OurProjects/Speaking.png" alt="Speaking" width={359} height={236} />
                <div className='text-cont'> 
                    <h3 className='card-head'>{t("practice")}</h3>
                    <p className='card-text'>{t("practice-desc")}</p>
                    <Link href={`/${locale}`} className="card-button">{t("learnMore")}</Link>
                </div>
        </li>
    </>
    )
}

export const Project3 = ({t, locale})=>{

    return (
    <>
        <li className='our-projects-card'>
            <SvgBorder />
            <Image className='card-img' src="/OurProjects/mobile.png" alt="mobile" width={359} height={236} />
                    <div className='text-cont'>
                    <h3 className='card-head'>{t("mobileApp")}</h3>
                    <p className='card-text'>{t("mobileApp-desc")}</p>
                    <Link href={`/${locale}`} className="card-button">{t("learnMore")}</Link>
                </div>
        </li>
    </>
    )
}