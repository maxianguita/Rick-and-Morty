import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 300px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

const CardText = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;


