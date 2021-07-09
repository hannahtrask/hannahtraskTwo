import styles from '../styles/about.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
	hidden: {
		opacity: 0,
		x: '100vw',
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			duration: 1.2,
			delay: 0,
		},
	},
};

const buttonVariants = {
	hover: {
		scale: 1.3,
		boxShadow: '0px 0px 16px rgb(255, 255, 255)',
		transition: {
			duration: 0.3,
		},
	},
};

const About = () => {
	return (
		<>
			<motion.div
				initial='hidden'
				animate='visible'
				variants={containerVariants}>
				<div className={styles.container}>
					<div className={styles.aboutContainer}>
						<h1 className={styles.header}>hey, I'm HANNAH!</h1>
						<img
							src='https://i.imgur.com/gpD4Z5k.jpg'
							alt='profile'
							className={styles.about}
						/>
						<p className={styles.textTwo}>
							And I believe in{' '}
							<strong>simple, clean designs and programs</strong>. Creative
							alternatives and interesting, eye catching, fun UI is my objective. The
							internet is a space where all walks of life can connect— from our
							couch to the other side of the world. Connections fuel the human
							experience, and I am here to <strong>bridge the gap</strong>{' '}
							between the digital and the concrete.
						</p>
						<p className={styles.textTwo}>
							I'm a whitewater raft guide turned{' '}
							<strong>full stack web developer</strong> currently based in
							Jackson Hole, Wyoming. I believe there is beauty, fun and magic everywhere, and <strong>isn't always immediately obvious</strong>. All of my work includes hidden treats.. see what you can find!
						</p>
						<Link href='/contact'>
							<motion.button
								className={styles.button}
								variants={buttonVariants}
								whileHover='hover'>
								reach out
							</motion.button>
						</Link>
						<Link href='/'>
							<motion.button
								className={styles.button}
								variants={buttonVariants}
								whileHover='hover'>
								back home
							</motion.button>
						</Link>
					</div>
					<svg
						className={styles.svg}
						stroke='currentColor'
						fill='currentColor'
						stroke-width='0'
						viewBox='0 0 1024 1024'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'>
						<path d='M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z'></path>
					</svg>
					<ul className={styles.words}>
						<li className={styles.wordsLine}>
							<p className={styles.text}>&nbsp;</p>
							<p className={styles.text}>hannah catherine trask</p>
						</li>
						<li className={styles.wordsLine}>
							<p className={styles.text}>hannah catherine trask</p>
							<p className={styles.text}>web developer</p>
						</li>
						<li className={styles.wordsLine}>
							<p className={styles.text}>web developer</p>
							<p className={styles.text}>whitewater enthusiast</p>
						</li>
						<li className={styles.wordsLine}>
							<p className={styles.text}>whitewater enthusiast</p>
							<p className={styles.text}>caffeine fiend</p>
						</li>
						<li className={styles.wordsLine}>
							<p className={styles.text}>caffeine fiend</p>
							<p className={styles.text}>innovator</p>
						</li>
						<li className={styles.wordsLine}>
							<p className={styles.text}>innovator</p>
							<p className={styles.text}>thought provider</p>
						</li>
						<li className={styles.wordsLine}>
							<p className={styles.text}>thought provider</p>
							<p className={styles.text}>&nbsp;</p>
						</li>
					</ul>
				</div>
			</motion.div>
		</>
	);
};

export default About;
