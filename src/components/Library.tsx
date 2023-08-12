import { LibraryProps } from "../containers/withLibrary";
import InfiniteScroll from "react-infinite-scroll-component";
import BookCard from "./BookCard";
import { BookType } from "../types/book.types";
import BookDetails from "./BookDetails";
import { StyledWrapper } from "../styles/library.styles";
import { StyledMessage } from "../styles/comon.style";

const Library = (props: LibraryProps) => {
  const { error, bookDetailsError, selectedBookId, books, bookDetails, fetchBooks, setSelectedBookId, closeBookDetailsModal } = props;

  if (error)
    return (<StyledMessage>{`Something went wrong. ${error.message}`}</StyledMessage>);
  if (!books)
    return (<StyledMessage>Loading...</StyledMessage>);
  if (books && books.length === 0)
    return (<StyledMessage>No data to display</StyledMessage>)

  return (
    <>
      <StyledWrapper>
        <InfiniteScroll
          dataLength={books!.length}
          next={fetchBooks}
          hasMore={true} //check total element in API and apply condition
          loader={<StyledMessage>Loading...</StyledMessage>}
          endMessage={<StyledMessage><b>End of data!</b></StyledMessage>}
        >
          {
            books!.map((book: BookType, index: number) => (
              <BookCard
                key={book.id + index}
                data={book}
                handleBookClick={() => setSelectedBookId(book.id)}
              />
            ))
          }
        </InfiniteScroll>
      </StyledWrapper>

      {
        selectedBookId &&
        <BookDetails
          details={bookDetails}
          onClose={closeBookDetailsModal}
          bookDetailsError={bookDetailsError}
        />
      }
    </>
  )
}

export default Library;