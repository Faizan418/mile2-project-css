import React from 'react'
import styles from '../Work/Work.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Work() {
  return (
    <div className={styles.containar}>

                <div className={styles.tital_div}>
                  <h1 className={styles.tital}>Work</h1>
                </div>

        <div className={styles.main}>

            <div className={styles.grid_containar}>

                <div className={styles.card}><Image className={styles.images} src={'/images/pro1.png'} alt='one' height={500} width={500}/> <h1 className={styles.image_bg}><Link className={styles.last_li} href={'https://faizan418-hackathon-project.vercel.app/'} target='_blank'> Live Demo </Link></h1></div>
                <div className={styles.card}><Image className={styles.images} src={'/images/pro2.png'} alt='two' height={300} width={300}/> <h1 className={styles.image_bg}><Link className={styles.last_li} href={'https://mile2-assignment-css.vercel.app/'} target='_blank'> Live Demo </Link></h1></div>
                <div className={styles.card}><Image className={styles.images} src={'/images/pro3.png'} alt='three' height={300} width={300}/> <h1 className={styles.image_bg}><Link className={styles.last_li} href={'https://mile3-project.vercel.app/'} target='_blank'> Live Demo </Link></h1></div>
                <div className={styles.card}><Image className={styles.images} src={'/images/pro4.png'} alt='four' height={300} width={300}/> <h1 className={styles.image_bg}><Link className={styles.last_li} href={'https://static-interactive-resume-nine.vercel.app/'} target='_blank'> Live Demo </Link></h1></div>
                <div className={styles.card}><Image className={styles.images} src={'/images/pro5.png'} alt='five' height={300} width={300}/> <h1 className={styles.image_bg}><Link className={styles.last_li} href={'https://number-gussing-game-mu.vercel.app/'} target='_blank'> Live Demo </Link></h1></div>
                <div className={styles.card}><Image className={styles.images} src={'/images/pro6.png'} alt='six' height={300} width={300}/> <h1 className={styles.image_bg}><Link className={styles.last_li} href={'https://countdown-timer-app-beta.vercel.app/'} target='_blank'> Live Demo </Link></h1></div>
                <div className={styles.card}><Image className={styles.images} src={'/images/portfolio-7.jpg'} alt='seven' height={300} width={300}/> <h1 className={styles.image_bg}><Link className={styles.last_li} href={'#'} target='_blank'> Live Demo </Link></h1></div>
                <div className={styles.card}><Image className={styles.images} src={'/images/portfolio-8.jpg'} alt='eight' height={300} width={300}/> <h1 className={styles.image_bg}><Link className={styles.last_li} href={'#'} target='_blank'> Live Demo </Link></h1></div>

            </div>

        </div>
      
    </div>
  )
}

export default Work
