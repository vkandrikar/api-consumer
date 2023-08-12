import styled from 'styled-components';

export const StyledCard = styled.div`
  padding: 8px;
  height: 220px;
  width: 15%;
  margin: 0.5%;
  display: inline-block;
  cursor: pointer;
  box-shadow: 1px 1px 5px grey;
  border-radius: 5px;

  & img {
    max-width: 100%;
    height: 150px;
    margin: 0 auto;
    display: flex;
  }

  & div {
    margin-top: 10px;

    & * {
      display: block;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 5px 0;
    }
  }

  @media (max-width: 1500px) {
    width: 19%
  }

  @media (max-width: 1200px) {
    width: 24%
  }

  @media (max-width: 900px) {
    width: 32%
  }

  @media (max-width: 600px) {
    width: 49%
  }

  @media (max-width: 350px) {
    width: 99%
  }
`;