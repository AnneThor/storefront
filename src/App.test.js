import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("that the proper welcome screen renders", async () => {
    render(<App />)

    expect(screen.findByTestId("welcome-screen")).toBeInTheDocument;


    // const container = screen.findByTestId("todo-wrapper")
    // const list = screen.findByTestId("todo-list")
    // const button = await screen.findByTestId("completed")
    // fireEvent.click(button);
    //
    // await waitFor( async() => {
    //   expect(button.className).toBe("btn btn-danger")
    // })

})
