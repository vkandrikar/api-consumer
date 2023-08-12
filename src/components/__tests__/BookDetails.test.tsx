import { render, screen } from "@testing-library/react";
import BookDetails from "../BookDetails";
import { AxiosError } from "axios";
import userEvent from "@testing-library/user-event";

describe('BookDetails.tsx', () => {
  const onClose = jest.fn();
  const props = {
    details: {
      id: '1',
      title: 'test book',
      img: 'test.png',
      author: 'test author',
      description: 'test description',
      publisher: 'test publisher',
      publishedDate: '2023',
      pages: 10
    },
    bookDetailsError: null,
    onClose: onClose
  };

  it('should render loading message when data is loading', () => {
    render(<BookDetails {...props} details={null} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render error message when there is any error', () => {
    render(<BookDetails {...props} bookDetailsError={{ message: 'test error' } as AxiosError} />);
    expect(screen.getByText('Something wen wrong. test error')).toBeInTheDocument();
  });

  it('should render book details', () => {
    render(<BookDetails {...props} />);
    expect(screen.getByText('test book')).toBeInTheDocument();
  })

  it('should render close button and handle click', () => {
    render(<BookDetails {...props} />);
    const closeBtn = screen.getByTestId('close-btn');
    expect(closeBtn).toBeInTheDocument();
    userEvent.click(closeBtn);
    expect(onClose).toBeCalled();
  })
})