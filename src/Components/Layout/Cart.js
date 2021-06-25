import React from 'react';
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { removeItem, addItems, decrementItem } from '../../Store/cart.js'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
    maxWidth: '50%',
    height: '80%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  Button: {
    // width: '1em',
    // padding: '0 0'
  // '& > *': { margin: theme.spacing(1), }
  },
}));

function Cart(props) {
  const classes = useStyles();
  const itemsInCart = useSelector(state => state.cart.items)

  const totalItemsInCart = itemsInCart.reduce((acc, item) => {
    return acc + item.numInCart
  }, 0)
  const totalCost = itemsInCart.reduce((acc, item) => {
    return acc + item.numInCart * item.price
  }, 0)

  function handleClick(item, method) {
    if (method === "subtractAll" ||
        (method === "subtract" && item.numInCart === 1)) {
      props.removeItem(item);
    } else if (method === "subtract") {
      props.decrementItem(item)
    } else {
      props.addItems(item)
    }
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
                        <Typography>{item.name} ({item.numInCart} x {item.price}) = ${item.numInCart * item.price}
                          <IconButton className={classes.Button}
                                  color="secondary" size="small"
                                  onClick={() => handleClick(item, "subtract")}>
                                  <ArrowDownwardIcon fontSize="inherit" />
                          </IconButton>
                        <IconButton className={classes.Button}
                                color="secondary" size="small"
                                onClick={() => handleClick(item, "add")}>
                          <ArrowUpward fontSize="inherit" />
                        </IconButton>
                        <IconButton className={classes.Button} aria-label="delete" size="small"
                                onClick={() => handleClick(item, "subtractAll")}><DeleteIcon /></IconButton>
                        </Typography>
                      </AccordionDetails>
            })
          }
        <AccordionDetails>
          <Typography>Total Items: {totalItemsInCart} Total Cost: {totalCost}</Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}

const mapStateToProps = state => ({
  items: state.cart.items
})

const mapDispatchToProps = { removeItem, addItems, decrementItem };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
