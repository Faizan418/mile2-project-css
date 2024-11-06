import React from 'react'
import styles from '../Header/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'


function Header() {
  return (
    <div className={styles.containar}>

        <div className={styles.main}>


            <div className={styles.display}>

                 <div className={styles.profile_div}>
                    <Image className={styles.profile} src={'/images/done.png'} alt='profile-picture' width={100} height={100}/>
                 </div>
                 <div className={styles.tital_div}>
                    <span className={styles.tital}>- Muhammad Faizan -</span>
                 </div>
                 <div className={styles.subject_div}>
                    <h3><span className={styles.subject}>Front-End Web Devloper</span></h3>
                 </div>
                 <div className={styles.icons_div}>

                    <Link href={'https://x.com/muhammadf4060'} target='_blank'><div className={styles.icon}><Image src={'/images/twitter-x.svg'} alt='twitter' width={25} height={25}/></div></Link>
                    <Link href={'https://www.linkedin.com/in/muhammad-faizan-2541132b8'} target='_blank'><div className={styles.icon}><Image src={'/images/linkedin.svg'} alt='linkedin' width={25} height={25}/></div></Link>
                    <Link href={'https://wa.me/+923406044359'} target='_blank'><div className={styles.icon}><Image src={'/images/whatsapp.svg'} alt='whatsapp' width={25} height={25}/></div></Link>
                    <Link href={'https://www.instagram.com/fazii.963/'} target='_blank'><div className={styles.icon}><Image src={'/images/instagram.svg'} alt='instagram' width={25} height={25}/></div></Link>

                 </div>

            </div>


        </div>

    </div>
  )
}

export default Header
