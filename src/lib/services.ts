import { api } from "./axios";
import config from '../config';
import { dtoBooksToDomain, dtoBookDetailsToDomain } from '../transformers/library.transformers';
import { BookDetailsType, BookType } from "../types/book.types";
import { CancelToken } from "axios";

//api swagger is not available to gerate types and henced used "any"

const bookService = {
  getBooks: async (index: number): Promise<BookType[]> => {
    const { data } = await api.get<any>(`?q=React&maxResults=${config.PAGE_LIMIT}&startIndex=${index}`);
    return dtoBooksToDomain(data.items);
  },
  getBookDetails: async (id: string, token: CancelToken): Promise<BookDetailsType> => {
    const { data } = await api.get<any>(`/${id}`, { cancelToken: token })
    return dtoBookDetailsToDomain(data);
  }
}

export default bookService;