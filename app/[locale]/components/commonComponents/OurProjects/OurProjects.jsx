"use client";
import { useLocale } from 'next-intl';
import Image from 'next/image'
import "./OurProjects.styles.scss"

const OurProjects = () => {
    return <>
        <section className='ourProjects'>
           
                <h2 className='head'>Our projects</h2>
                <ul className='wraper'>
                    <li className='our-projects-card'>
                    <Image className='card-svg' src="./OurProjects/CardBorder.svg" alt="Speaking" width={359} height={590} />
                    
                    <Image className='card-img' src="/OurProjects/Rectangle.png" alt="Image" width={359} height={236} />
                        <div className='text-cont'>
                        <h3 className='card-head'>YouTube channel</h3>
                        <p className='card-text'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        <button className='card-button'>learn more</button>
                    </div>
                    </li>
                    <li className='our-projects-card'>
                    <Image className='card-svg' src="./OurProjects/CardBorder.svg" alt="Speaking" width={359} height={590} />
                    <Image className='card-img' src="/OurProjects/Speaking.png" alt="Speaking" width={359} height={236} />
                    <div className='text-cont'> 
                        <h3 className='card-head'>Speaking practice</h3>
                        <p className='card-text'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        <button className='card-button'>learn more</button>
                    </div>
                    </li>
                    <li className='our-projects-card'>
                    <Image className='card-svg' src="./OurProjects/CardBorder.svg" alt="Speaking" width={359} height={590} />
                    <Image className='card-img' src="/OurProjects/mobile.png" alt="mobile" width={359} height={236} />
                        <div className='text-cont'>
                        <h3 className='card-head'>mobile app</h3>
                        <p className='card-text'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        <button className='card-button'>learn more</button>
                        </div>
                    </li>

                </ul>
        </section>
        </>

}

export default OurProjects;