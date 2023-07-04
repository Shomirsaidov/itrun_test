import { render, screen } from '@testing-library/react';
// import App from './App';
import HomePage from './Pages/HomePage'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe(HomePage, () => {
  it('check out loading books', () => {
    const {getByTestId} = render(<HomePage/>)
    const bookName = getByTestId("bookName").textContent
    expect(bookName).toHaveTextContent()
  })
})
