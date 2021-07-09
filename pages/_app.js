import '../styles/globals.scss';


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
		<div
			key={router.route}
			initial='pageInitial'
			animate='pageAnimate'
			variants={pageVariants}>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
