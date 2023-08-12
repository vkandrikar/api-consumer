import { BookDetailsType } from "../types/book.types";
import parse from 'html-react-parser';
import { AxiosError } from "axios";
import { StyledCloseButton, StyledModal, StyledModalBody, StyledModalContent, StyledModalHeader } from "../styles/bookDetails.style";
import { StyledMessage } from "../styles/comon.style";

type Props = {
  details: BookDetailsType | null;
  bookDetailsError: AxiosError | null;
  onClose(): void;
}

const BookDetails = (props: Props) => {
  const { bookDetailsError, details, onClose } = props;

  return (
    <StyledModal onClick={onClose} data-testid='book-details'>
      <StyledModalContent onClick={(e) => e.stopPropagation()}>
        {
          bookDetailsError ?
            <StyledMessage>
              {`Something wen wrong. ${bookDetailsError.message}`}
            </StyledMessage>
            :
            details ?
              <>
                <StyledModalHeader>
                  <StyledCloseButton onClick={onClose} data-testid='close-btn'>&times;</StyledCloseButton>
                  <h3>{details.title}</h3>
                </StyledModalHeader>

                <StyledModalBody>
                  <div>
                    <img alt={details.title} src={details.img} />
                    <div>
                      <p>{details.author}</p>
                      <p>{`${details.publisher}, ${details.publishedDate} - ${details.pages} pages`}</p>
                    </div>
                  </div>
                  {parse(details.description)}
                </StyledModalBody>
              </>
              :
              <StyledMessage>Loading...</StyledMessage>
        }
      </StyledModalContent>
    </StyledModal>
  )
}

export default BookDetails;