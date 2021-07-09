import styles from '../styles/work.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { motion } from 'framer-motion';
import Navigation from '../components/navigation';

import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
	backgroundColor: 'rgba(0, 0, 0, 0.4)',
	margin: '10px',
	borderRadius: '25px'
  },
  label: {
	background: 'linear-gradient(45deg, #000009 30%, #fff 90%)',
    borderRadius: 3,
    border: 0,
	margin: '0 auto',
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(17, 53, 67, .3)',
  },
  text: {
	color: 'white',
	fontFamily: 'Open Sans Condensed, sans-serif',
  },
  image: {
	borderTopLeftRadius: '25px',
	borderTopRightRadius: '25px'
  }
});

const Work = () => {
	const [projs, setProjs] = useState([]);
	const classes = useStyles();

	const url =
		'https://cdn.contentful.com/spaces/vliau3tc6b7n/environments/master/entries?access_token=TOc124hNXrbySDs4bStAGA7_rI5Fcn7Dtwr-yNBn4tE';

	const getProjects = () => {
		axios.get(url).then((res) => {
			setProjs(res.data.items);
			console.log(projs);
		});
	};

	const clients = [];

	useEffect(() => getProjects(), []);

	return (
		<>
			<motion.div
				variants={containerVariants}
				initial='hidden'
				animate='visible'
				className={styles.container}>
				<Navigation />
				<h1 className={styles.header}>PROFESSIONAL WORK</h1>
				<div className={styles.projects}>
					{clients &&
						clients.map((indiv) => {
							return (
								<h1>
									this is a work in progress! check back soon for an updated
									page :)
								</h1>
							);
						})}
					<h2>
						This is a work in progress! Check back soon for an updated page :)
					</h2>
				</div>
				<h1 className={styles.header}>PERSONAL GROWTH PROJECTS</h1>
				<p className={styles.sidebar}>Built between November 2020 and January 2021</p>
				<div className={styles.projects}>
					{projs &&
						projs.map((indiv) => {
							return (

								<motion.Card variants={containerVariants} 
											 initial='hidden' 
											 animate='visible' 
											 className={classes.root}>
      								<CardActionArea>
										<a href={indiv.fields.linkurl} target="_blank">
        								<CardMedia
											className={classes.image}
          									component="img"
          									height="140"
          									image={indiv.fields.imagelink}
        									/>
										</a>
        								<CardContent>
          									<Typography gutterBottom variant="h5" component="h2" className={classes.text}>
            									{indiv.fields.title}
          									</Typography>
          									<Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
            									{indiv.fields.description}
          									</Typography>
        								</CardContent>
      								</CardActionArea>
    							</motion.Card>
					
							);
						})}
				</div>
			</motion.div>
		</>
	);
};

export default Work;
