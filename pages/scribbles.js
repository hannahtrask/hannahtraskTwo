import { useState, useEffect } from 'react';
import styles from '../styles/scribbles.module.scss';
import { motion } from 'framer-motion';
import Navigation from '../components/navigation';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

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
			duration: 1.2,
			delay: 0,
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

const Scribbles = () => {
	const [writing, setWriting] = useState([]);
	const classes = useStyles();

	const url =
		'https://cdn.contentful.com/spaces/07kzv5dppnsq/environments/master/entries?access_token=Hq7Q6EbOXf4KfbjosaQr1KdfCJTVsit41lvBlvx4D5U';

	const getWriting = () => {
		axios.get(url).then((res) => {
			setWriting(res.data.items);
		});
	};

	useEffect(() => getWriting(), []);
    return (
		<>
			<motion.div
				variants={containerVariants}
				initial='hidden'
				animate='visible'
				className={styles.container}>
				<Navigation />
				<h1 className={styles.header}>#professional-work</h1>
				<div className={styles.projects}>
					{writing &&
						writing.map((indiv) => {
							return (
								<motion.Card variants={containerVariants} 
											 initial='hidden' 
											 animate='visible' 
											 className={classes.root}>
      								<CardActionArea>
										<a href={indiv.fields.subtitle} target="_blank">
        								<CardMedia
											className={classes.image}
          									component="img"
          									height="140"
          									image={indiv.fields.snippetUrl}
        									/>
										</a>
        								<CardContent>
          									<Typography gutterBottom variant="h5" component="h2" className={classes.text}>
            									{indiv.fields.piece}
          									</Typography>
											<Typography variant="body3" color="textSecondary" component="p" className={classes.text}>
												Publish Date: <strong>{indiv.fields.date}</strong>
											</Typography>
          									<Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
												  <br />
            									{indiv.fields.snippet}
          									</Typography>
        								</CardContent>
      								</CardActionArea>
    							</motion.Card>
							);
						})}
				</div>	
			</motion.div>
		</>
    )
}

export default Scribbles;