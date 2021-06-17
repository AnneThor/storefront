import React from 'react';
import { useSelector } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MediaCard from './Card.js'
import '../Style/Home.css';

function Home(props) {

  const display = useSelector((state) => state.display)
  console.log("DISPLAY IS ", display)

  const displayText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et. Sagittis id consectetur purus ut faucibus. Odio ut sem nulla pharetra. Amet volutpat consequat mauris nunc. Non curabitur gravida arcu ac tortor."

  const prodArr = [
    { name: "shirt", price: 5, quantity: 5, description: displayText, category: "HOUSEWARES" },
    { name: "orange", price: 2.5, quantity: 17, description: displayText,  category: "FOOD" },
    { name: "shoes", price: 50, quantity: 5, description: displayText, category: "HOUSEWARES" },
    { name: "tent", price: 25, quantity: 2, description: displayText, category: "OUTDOORS" },
    { name: "jacket", price: 75, quantity: 20, description: displayText, category: "HOUSEWARES" },
    { name: "shovel", price: 5, quantity: 5, description: displayText, category: "OUTDOORS" },
    { name: "apple", price: 1.25, quantity: 5, description: displayText, category: "FOOD" },
    { name: "pants", price: 5, quantity: 5, description: displayText, category: "HOUSEWARES" },
    { name: "dress", price: 5, quantity: 5, description: displayText, category: "OUTDOORS" },
    { name: "bagel", price: 0.5, quantity: 15, description: displayText, category: "FOOD" },
  ]

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">

        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
        <h1>Available Products</h1>
        <div id="cards">
        {
          prodArr.filter(item => item.category.toUpperCase() === display.display.toUpperCase())
            .map(item => {
              return <MediaCard key={item.name} item={item} />
            }
          )
        }
        </div>
        </Typography>

      </Container>
    </React.Fragment>
  )

}

export default Home;
