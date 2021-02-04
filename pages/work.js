import styles from '../styles/work.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
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
			duration: 1.1,
			delay: 0.5,
		},
	},
};

const Work = () => {
	const [projs, setProjs] = useState([]);

	const url =
		'https://cdn.contentful.com/spaces/vliau3tc6b7n/environments/master/entries?access_token=TOc124hNXrbySDs4bStAGA7_rI5Fcn7Dtwr-yNBn4tE';

	const getProjects = () => {
		axios.get(url).then((res) => {
			setProjs(res.data.items);
			console.log(projs);
			return projs;
		});
	};

	useEffect(() => getProjects(), []);

	return (
		<>
			<motion.div
				variants={containerVariants}
				initial='hidden'
				animate='visible'
				className={styles.container}>
					<Navigation />
				<div className={styles.clients}></div>
				<h1 className={styles.header}>PERSONAL GROWTH PROJECTS</h1>
				<div className={styles.projects}>
					{projs &&
						projs.map((indiv) => {
							return (
								<div className={styles.project}>
									<h1 className={styles.title}>{indiv.fields.title}</h1>
									<Link href={indiv.fields.linkurl} passHref>
										<a target='_blank' rel='noreferrer'>
											<img
												className={styles.image}
												src={indiv.fields.imagelink}
											/>
										</a>
									</Link>
									<p className={styles.description}>
										{indiv.fields.description}
									</p>
								</div>
							);
						})}
				</div>
			</motion.div>
		</>
	);
};

export default Work;
