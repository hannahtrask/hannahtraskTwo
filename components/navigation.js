import Link from 'next/link'
import styles from './navigation.module.scss';
import { motion } from 'framer-motion';

const Navigation = () => {
    return (
			<ul className={styles.navigation}>
				<Link href='/' className='link'>
					<motion.li
						whileHover={{ scale: 1.3, originX: 0, color: '#B2C3CE' }}
						transition={{ type: 'spring', stiffness: 300 }}>
						["home"]
					</motion.li>
				</Link>
				<Link href='/work' className='link'>
					<motion.li
						whileHover={{ scale: 1.3, originX: 0, color: '#B2C3CE' }}
						transition={{ type: 'spring', stiffness: 300 }}>
						["dev"]
					</motion.li>
				</Link>
				<Link href='/scribbles'>
					<motion.li
						whileHover={{ scale: 1.3, originX: 0, color: '#B2C3CE' }}
						transition={{ type: 'spring', stiffness: 300 }}>
						["words"]
					</motion.li>
				</Link>
				<Link href='/about'>
					<motion.li
						whileHover={{ scale: 1.3, originX: 0, color: '#B2C3CE' }}
						transition={{ type: 'spring', stiffness: 300 }}>
						["about"]
					</motion.li>
				</Link>
				<Link href='/contact'>
					<motion.li
						whileHover={{ scale: 1.3, originX: 0, color: '#B2C3CE' }}
						transition={{ type: 'spring', stiffness: 300 }}>
						["chat"]
					</motion.li>
				</Link>
			</ul>
		);
}

export default Navigation;