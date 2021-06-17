import React from 'react';
import { connect } from 'react-redux'
import { initializeDisplay, toggleDisplay } from '../../Store/display.js'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function Breadcrumb(props) {

  function handleClick(e) {
    e.preventDefault();
    toggleDisplay(e.target.textContent)
  }

  function toggleDisplay(name) {
    props.toggleDisplay(name)
  }

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography color="textPrimary">Browse by Category</Typography>
      <Link color="inherit" href="/" value="food" onClick={handleClick}>
        Food
      </Link>
      <Link color="inherit" href="/" value="housewares" onClick={handleClick}>
        Housewares
      </Link>
      <Link color="inherit" href="/" value="outdoors" onClick={handleClick}>
        Outdoors
      </Link>

    </Breadcrumbs>
  );

}

const mapStateToProps = state => ({
  display: state.display
});

const mapDispatchToProps = { initializeDisplay, toggleDisplay };

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumb);
