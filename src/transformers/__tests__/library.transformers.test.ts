import { BookDetailsType, BookType } from "../../types/book.types";
import { dtoBookDetailsToDomain, dtoBooksToDomain } from "../library.transformers";
import { bookDetailsFixture } from "./fixture/bookDetails.fixture";
import { booksFixture } from "./fixture/books.fixture";

describe('library.transformer.ts', () => {
  describe('dtoBooksToDomain', () => {
    const result: BookType[] = dtoBooksToDomain(booksFixture);

    it('should have 2 records', () => {
      expect(result).toHaveLength(2);
    });

    it('should return data', () => {
      expect(result[0].title).toBe('book1');
      expect(result[0].img).toBe('test.png');
      expect(result[1].author).toBe('test');
    });

    it('should return N/A as author, if author is not available', () => {
      expect(result[0].author).toBe('N/A');
    });

    it('should return no_cover_thumb.gif as img, if thumbnail is not available', () => {
      expect(result[1].img).toBe('/images/no_cover_thumb.gif');
    });
  });

  describe('dtoBookDetailsToDomain', () => {
    const result: BookDetailsType = dtoBookDetailsToDomain(bookDetailsFixture);

    it('should return data', () => {
      expect(result.pages).toBe(10);
      expect(result.publishedDate).toBe('2023');
    });

    it('should return N/A as author, if author is not available', () => {
      expect(result.author).toBe('N/A');
    });
  });
});