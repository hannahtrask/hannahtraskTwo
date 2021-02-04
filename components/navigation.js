import Link from 'next/link'
import styles from './navigation.module.scss';
import { motion } from 'framer-motion';

const Navigation = () => {
    return (
			<ul className={styles.navigation}>
				<Link href='/' className='link'>
					<motion.li
						whileHover={{ scale: 1.3, originX: 0, color: '#113543' }}
						transition={{ type: 'spring', stiffness: 300 }}>
						home
					</motion.li>
				</Link>
				<Link href='/work' className='link'>
					<motion.li
						whileHover={{ scale: 1.3, originX: 0, color: '#113543' }}
						transition={{ type: 'spring', stiffness: 300 }}>
						projects
					</motion.li>
				</Link>
				<Link href='/about'>
					<motion.li
						whileHover={{ scale: 1.3, originX: 0, color: '#113543' }}
						transition={{ type: 'spring', stiffness: 300 }}>
						about me
					</motion.li>
				</Link>
				<Link href='/contact'>
					<motion.li
						whileHover={{ scale: 1.3, originX: 0, color: '#113543' }}
						transition={{ type: 'spring', stiffness: 300 }}>
						get in touch
					</motion.li>
				</Link>
			</ul>
		);
}

export default Navigation;