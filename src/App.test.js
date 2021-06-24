import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders top level components on load', () => {
  render(<App />);
  const Nav = screen.getByTestId("Navbar");
  expect(Nav).toBeInTheDocument();
});

test('that we do not have products displayed on load', () => {
  render(<App />);
  const Home = screen.getByTestId("welcome-screen")
  expect(Home).toBeInTheDocument();
})

test('that products appear when the category is clicked', async () => {
  render(<App />)
  const FoodButton = screen.getByTestId("food")
  expect(FoodButton.textContent).toBe("Food")
  fireEvent.click(FoodButton.firstChild)
  await waitFor( async () => {
    expect(screen.getByTestId("available-products")).toBeInTheDocument()
  })

})
