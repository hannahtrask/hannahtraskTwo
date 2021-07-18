import Head from 'next/head';
import Intro from '../components/intro';
import styles from '../styles/home.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';

const buttonVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { duration: 1, delay: 4, staggerChildren: 1 },
	},
};

const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
	hover: {
		scale: 1.3,
		textShadow: '0px 0px 8px rgb(255, 255, 255)',
		transition: {
			duration: 0.3,
		},
	},
};

const svgVariants = {
	hidden: {
		rotate: 360,
		opacity: 0,
	},
	visible: {
		opacity: 1,
		rotate: 0,
		transition: { duration: 1, delay: 3 },
	},
};

const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 2,
			ease: 'easeInOut',
		},
	},
};

export default function Home() {
	return (
		<>
			<div className={styles.container}>
				<Head>
					<title>Hannah Catherine</title>
					<link rel='icon' href='/triangle-icon.png' />
				</Head>
				<Intro />

				<motion.svg
					variants={svgVariants}
					initial='hidden'
					animate='visible'
					className={styles.link}
					stroke='currentColor'
					fill='currentColor'
					stroke-width='0'
					viewBox='0 0 24 24'
					height='1em'
					width='1em'
					xmlns='http://www.w3.org/2000/svg'>
					<motion.path
						variants={pathVariants}
						d='M21.886,5.536C21.713,5.207,21.372,5,21,5H3C2.628,5,2.287,5.207,2.114,5.536C1.941,5.865,1.966,6.263,2.178,6.569l9,13 C11.364,19.839,11.672,20,12,20s0.636-0.161,0.822-0.431l9-13C22.034,6.263,22.059,5.865,21.886,5.536z M12,17.243L4.908,7h14.184 L12,17.243z'></motion.path>
				</motion.svg>

				<motion.div
					initial='hidden'
					animate='visible'
					variants={buttonVariants}
					className={styles.scroll}>
					<motion.div variants={item} whileHover='hover'>
						<Link href='/contact'>.chat()</Link>
					</motion.div>
					<motion.div variants={item} whileHover='hover'>
						<Link href='/work'>.dev()</Link>
					</motion.div>
					<motion.div variants={item} whileHover='hover'>
						<Link href='/scribbles'>.words()</Link>
					</motion.div>	
					<motion.div variants={item} whileHover='hover'>
						<Link href='/about'>.about()</Link>
					</motion.div>			
				</motion.div>
			</div>
		</>
	);
}
