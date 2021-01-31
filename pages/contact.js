import styles from '../styles/home.module.scss';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

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
			duration: 1.1,
			delay: 0.5,
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

const Contact = () => {
	function sendEmail(e) {
		emailjs
			.sendForm(
				'service_q6wrfnf',
				'template_1fa2kx4',
				e.target,
				'user_KBxEcbif77Xh0iNNI4uvN'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	return (
		<>
			<div className={styles.container}>
				<motion.div
					className={styles.mainContainer}
					variants={containerVariants}
					initial='hidden'
					animate='visible'>
					<motion.div className={styles.header}>
						<h1>Like what you see?</h1>
					</motion.div>
					<motion.div
						variants={containerVariants}
						initial='hidden'
						animate='visible'>
						<form className={styles.form} onSubmit={sendEmail}>
							<div>Drop me a line!</div>
							<div>Let's see what we can make together.</div>
							<br />
							<input
								className={styles.input}
								type='text'
								name='name'
								placeholder='name'
							/>
							<br />
							<input
								className={styles.input}
								type='text'
								name='email'
								placeholder='email'
							/>
							<br />
							<textarea
								className={styles.textarea}
								name='message'
								placeholder='leave your message here!'
							/>
							<motion.input
								variants={buttonVariants}
								whileHover='hover'
								type='submit'
								value='send it'
								className={styles.button}
							/>
						</form>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default Contact;
