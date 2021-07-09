import styles from '../styles/scribbles.module.scss';
import { motion } from 'framer-motion';
import Navigation from '../components/navigation';

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

const Scribbles = () => {
    return (
        <>

			<motion.div
				initial='hidden'
				animate='visible'
				variants={containerVariants}
                className={styles.container}>
                <Navigation />
				<div className={styles.container}>
                    <h1 className={styles.header}>Come back soon to see samples of some of my published work!</h1>
				</div>
			</motion.div>
		</>
    )
}

export default Scribbles;