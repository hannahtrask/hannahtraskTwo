import styles from './intro.module.scss';
import { motion } from 'framer-motion';

const textVariants = {
	hidden: {
		y: '-100vh',
	},
	visible: {
		y: 0,
		transition: { type: 'spring', stiffness: 60, delay: 0.6 },
	},
};

const textVariantsTwo = {
	hidden: {
		y: '100vh',
	},
	visible: {
		y: 0,
		transition: { type: 'spring', stiffness: 60, delay: 0.6 },
	},
};

const pathVariants = {
	hidden: {
		opacity: 0,
		scale: 0,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 2,
			delay: 1,
		},
	},
};

const Intro = () => {
	return (
		<div className={styles.introduction}>
			<motion.svg
				className={styles.underline}
				variants={pathVariants}
				initial='hidden'
				animate='visible'></motion.svg>
			<motion.div className={styles.intro} initial='hidden' animate='visible'>
				<motion.h1 className={styles.header} variants={textVariants}>
					HANNAH
				</motion.h1>

				<motion.h1 className={styles.header} variants={textVariantsTwo}>
					CATHERINE
				</motion.h1>

				<motion.h1 className={styles.header} variants={textVariants}>
					TRASK
				</motion.h1>
			</motion.div>
			<motion.svg
				className={styles.underline}
				variants={pathVariants}
				initial='hidden'
				animate='visible'></motion.svg>
		</div>
	);
};

export default Intro;
