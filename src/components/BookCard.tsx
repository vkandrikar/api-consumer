import { StyledCard } from "../styles/bookCard.style";
import { BookType } from "../types/book.types";

type Props = {
  data: BookType;
  handleBookClick(id: string): void;
}

const BookCard = (props: Props) => {
  const { id, img, title, author } = props.data;

  return (
    <StyledCard onClick={() => props.handleBookClick(id)}>
      <img alt={title} src={img} />
      <div>
        <b>{title}</b>
        <p>{`By ${author}`}</p>
      </div>
    </StyledCard>
  )
}

export default BookCard;