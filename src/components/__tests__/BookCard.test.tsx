import { render, screen } from "@testing-library/react";
import BookCard from "../BookCard";
import userEvent from "@testing-library/user-event";

describe('BookCard.tsx', () => {
  const clickHandler = jest.fn();
  const props = {
    data: {
      id: '1',
      title: 'test book',
      img: 'test.png',
      author: 'test author'
    },
    handleBookClick: clickHandler
  };

  it('should render and handle click', () => {
    render(<BookCard {...props} />)
    const card = screen.getByText('test book');

    expect(card).toBeInTheDocument();
    userEvent.click(card);
    expect(clickHandler).toBeCalled();
  });
});