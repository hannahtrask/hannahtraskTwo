import '../styles/globals.scss';
import { motion } from 'framer-motion';


const pageVariants = {
	pageInitial: {
		opacity: 0.6,
	},
	pageAnimate: {
		opacity: 1,
		transition: { ease: 'easeInOut', duration: 2 },
	},
};

function MyApp({ Component, pageProps, router }) {
	return (
		<motion.div
			key={router.route}
			initial='pageInitial'
			animate='pageAnimate'
			variants={pageVariants}>
			<Component {...pageProps} />
		</motion.div>
	);
}

export default MyApp;
