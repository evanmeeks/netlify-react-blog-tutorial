import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

const styles = (theme) => ({
	root: {
		display: "flex",
		fontFamily: "'Lato', sans-serif"
	},
	chip: {
		fontFamily: "'Lato', sans-serif",
		margin: theme.spacing.unit
	},
	outlinedChip: {
		fontFamily: "'Lato', sans-serif",
		cursor: "pointer",
		textTransform: "capitalize",
		fontSize: "0.7em",
		marginleft: "2px",
		marginRight: "2px",
		marginBottom: "7px"
	}
});

function fpChip(props) {
	const { classes } = props;
	return <Chip avatar={<Avatar>FP</Avatar>} className={classes.outlinedChip} label="Functional Programming" color="primary" variant="outlined" />;
}

function OutlinedChips(props) {
	const { classes, label } = props;
	if (label === "functional programming") {
		return fpChip(props);
	} else
		return (
			<div className={classes.root}>
				<Chip onDelete={() => {}} deleteIcon={<DoneIcon />} label={label} color="primary" className={classes.outlinedChip} variant="outlined" />
			</div>
		);
}

OutlinedChips.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedChips);
