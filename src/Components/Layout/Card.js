import React from 'react';
import { connect } from 'react-redux'
import { addItems } from '../../Store/cart.js'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Unsplash from 'react-unsplash-wrapper'

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    maxHeight: 300
  },
  media: {
    maxheight: 100,
  },
});

function MediaCard(props) {
  const classes = useStyles();

  function handleClick(item){
    props.addItems(item);
  }

  return (
    <span data-testid="card">
    <Card className={classes.root} >
      <CardActionArea>
        <Unsplash width="200" height="100" keywords={props.item.name} img />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleClick(props.item)}>
          Add to Cart ${props.item.price}
        </Button>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
    </span>
  );
}

const mapStateToProps = state => ({
  items: state.cart.items
})

const mapDispatchToProps = { addItems };

export default connect(mapStateToProps, mapDispatchToProps)(MediaCard);
