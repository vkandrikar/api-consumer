import { BookDetailsType, BookType } from "../types/book.types";

const noPreview = `${process.env.PUBLIC_URL}/images/no_cover_thumb.gif`;

export const dtoBooksToDomain = (data: any): BookType[] =>
  data.map((book: any) => ({
    id: book.id,
    title: book.volumeInfo.title,
    img: book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks?.thumbnail : noPreview,
    author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A'
  }))

export const dtoBookDetailsToDomain = (data: any): BookDetailsType => ({
  id: data.id,
  title: data.volumeInfo.title,
  img: data.volumeInfo.imageLinks?.thumbnail ? data.volumeInfo.imageLinks?.thumbnail : noPreview,
  author: data.volumeInfo.authors ? data.volumeInfo.authors.join(', ') : 'N/A',
  description: data.volumeInfo.description,
  publisher: data.volumeInfo.publisher,
  publishedDate: data.volumeInfo.publishedDate,
  pages: data.volumeInfo.printedPageCount,
})