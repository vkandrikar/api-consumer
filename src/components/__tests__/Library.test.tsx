import { render, screen } from "@testing-library/react";
import Library from "../Library";
import { AxiosError } from "axios";

describe('Library.tsx', () => {
  const props = {
    error: null,
    bookDetailsError: null,
    selectedBookId: undefined,
    books: [
      {
        id: '1',
        title: 'test book',
        img: 'test.png',
        author: 'test author'
      }
    ],
    bookDetails: null,
    fetchBooks: jest.fn,
    setSelectedBookId: jest.fn,
    closeBookDetailsModal: jest.fn
  };

  it('should render error if there any', () => {
    render(<Library {...props} error={{ message: 'test error' } as AxiosError} />);
    expect(screen.getByText('Something went wrong. test error')).toBeInTheDocument();
  })

  it('should render loading message when data is loading', () => {
    render(<Library {...props} books={null} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  })

  it('should render message when there is no data available', () => {
    render(<Library {...props} books={[]} />);
    expect(screen.getByText('No data to display')).toBeInTheDocument();
  })

  it('should render data', () => {
    render(<Library {...props} />);
    expect(screen.getByText('test book')).toBeInTheDocument();
    expect(screen.queryByTestId('book-details')).not.toBeInTheDocument();
  })

  it('should render book details when book is selected', () => {
    render(<Library {...props} selectedBookId='1' />);
    expect(screen.getByTestId('book-details')).toBeInTheDocument();
  })
});