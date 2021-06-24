import React from 'react';
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { removeItem } from '../../Store/cart.js'
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '15%',
    heidght: '80%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  button: {
  '& > *': { margin: theme.spacing(1), }
  },
}));

function Cart(props) {
  const classes = useStyles();
  const itemsInCart = useSelector(state => state.cart.items)

  const totalItemsInCart = itemsInCart.reduce((acc, item) => {
    return acc + item.numInCart
  }, 0)
  // const itemsNumber = totalItemsInCart > 0 ? `(${totalItemsInCart})` : ''

  function handleClick(item) {
    props.removeItem(item);
  }

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary

          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Cart {totalItemsInCart > 0 ? `(${totalItemsInCart})` : ''}</Typography>
        </AccordionSummary>

          { itemsInCart.map(item => {
              return <AccordionDetails key={item.name}>
                        <Typography>{item.name} {item.numInCart}
                        <Button className={classes.button}
                                color="secondary"
                                onClick={() => handleClick(item)}>X</Button>
                        </Typography>
                      </AccordionDetails>
            })
          }

      </Accordion>

    </div>
  );
}

const mapStateToProps = state => ({
  items: state.cart.items
})

const mapDispatchToProps = { removeItem };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
