import React from 'react';
import { useSelector } from 'react-redux'
import { If, Then, Else } from 'react-if';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MediaCard from './Card.js'

import '../Style/Home.css';

function Home(props) {

  const category = useSelector((state) => state.category)
  const product = useSelector(state => state.product.products)

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">

        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
        <If condition={category.category==="home"}>
          <Then>
            <h1 data-testid="welcome-screen">Welcome to the Virtual Storefront</h1>
          </Then>
          <Else>
            <h1>Available Products</h1>
            <div id="cards">
              <If condition={category.category.toUpperCase() === "ALL"}>
                <Then>
                  { product.map(item => <MediaCard key={item.name} item={item} data-testid="all-items"/>) }
                </Then>
                <Else>
                  {
                    product.filter(item => item.category === category.category.toUpperCase())
                      .map(item => <MediaCard key={item.name} item={item} data-testid="filter-item"/>)
                  }
                </Else>
              </If>
            </div>
          </Else>
        </If>
        </Typography>

      </Container>

    </React.Fragment>
  )

}

export default Home;
