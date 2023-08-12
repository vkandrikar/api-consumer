import { ComponentType, FC, useState, useEffect } from "react";
import { BookDetailsType, BookType } from "../types/book.types";
import bookService from '../lib/services';
import axios, { AxiosError } from "axios";

export type LibraryProps = {
  books: BookType[] | null;
  selectedBookId?: string;
  bookDetails: BookDetailsType | null;
  error: AxiosError | null;
  bookDetailsError: AxiosError | null;
  setSelectedBookId(id?: string): void;
  fetchBooks(): void;
  closeBookDetailsModal(): void;
}

const withLibrary = (BaseComponent: ComponentType<LibraryProps>): FC => () => {
  const [books, setBooks] = useState<BookType[] | null>(null);
  const [selectedBookId, setSelectedBookId] = useState<string | undefined>();
  const [bookDetails, setBookDetails] = useState<BookDetailsType | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [bookDetailsError, setBookDetailsError] = useState<AxiosError | null>(null);

  const fetchBooks = () => {
    bookService.getBooks(books ? books.length : 0)
      .then(data => {
        const prevData = books ? [...books] : []
        setBooks([...prevData, ...data]);
      })
      .catch(err => {
        setError(err);
      })
  }

  const closeBookDetailsModal = () => {
    setSelectedBookId(undefined);
    setBookDetails(null);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    if (!selectedBookId) return;

    const source = axios.CancelToken.source();
    setBookDetailsError(null);
    bookService.getBookDetails(selectedBookId, source.token)
      .then(data => {
        setBookDetails(data);
      })
      .catch(err => {
        setBookDetailsError(err);
      });

    return () => source.cancel();
  }, [selectedBookId]);

  return (
    <BaseComponent
      books={books}
      selectedBookId={selectedBookId}
      error={error}
      bookDetailsError={bookDetailsError}
      bookDetails={bookDetails}
      fetchBooks={fetchBooks}
      setSelectedBookId={setSelectedBookId}
      closeBookDetailsModal={closeBookDetailsModal}
    />
  )
}

export default withLibrary;