import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const styles = (theme) => ({
	root: {
		display: 'flex'
	},
	chip: {
		margin: theme.spacing.unit
	},
	outlinedChip: {
		textTransform: 'capitalize',
		fontSize: '0.9rem',
		marginLeft: '9px',
		marginRight: '1px'
	}
});

function fpChip(props) {
	const { classes } = props;
	return <Chip avatar={<Avatar>FP</Avatar>} deleteIcon={<DoneIcon />} className='outlinedChip' label='Functional Programming' color='primary' variant='outlined' />;
}

function OutlinedChips(props) {
	const { classes, slug, label } = props;

	return (
		<div className={classes.root}>
			{(label === 'functional programming' && fpChip(props)) || <Chip label={label} deleteIcon={<DoneIcon />} color='primary' className='outlinedChip' variant='outlined' />}
		</div>
	);
}

OutlinedChips.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedChips);
