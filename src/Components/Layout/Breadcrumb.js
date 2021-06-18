import React from 'react';
import { connect } from 'react-redux'
import { initializeCategory, toggleCategory } from '../../Store/category.js'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

function Breadcrumb(props) {

  function handleClick(e) {
    e.preventDefault();
    toggleCategory(e.target.value)
  }

  function toggleCategory(name) {
    props.toggleCategory(name)
  }

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography color="textPrimary">
        <option value="home" onClick={handleClick} data-testid="home">Browse by Category</option>
      </Typography>
      <option color="inherit" value="FOOD" onClick={handleClick} data-testid="food">
        Food
      </option>
      <option color="inherit" value="HOUSEWARES" onClick={handleClick} data-testid="housewares">
        Housewares
      </option>
      <option color="inherit" value="OUTDOORS" onClick={handleClick} data-testid="outdoors">
        Outdoors
      </option>
      <option color="inherit" value="ALL" onClick={handleClick} data-testid="all">
        View All
      </option>
    </Breadcrumbs>
  );

}

const mapStateToProps = state => ({
  display: state.display
});

const mapDispatchToProps = { initializeCategory, toggleCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumb);
