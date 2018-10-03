import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 50,
    minHeight: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  name: {
    marginBottom: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
  },
};

function StaffCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.name} color="textSecondary">
          { props.staff.name }
        </Typography>
        <Typography className={classes.details}>
          { props.staff.address }
        </Typography>
        <Typography className={classes.details} color="textSecondary">
          { props.staff.email }
        </Typography>
        <Typography className={classes.details} color="textSecondary">
          { props.staff.gmail }
          <br />
        </Typography>
      </CardContent>
    </Card>
  )
}

StaffCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StaffCard);
