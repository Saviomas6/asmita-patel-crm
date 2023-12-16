import styled from "styled-components";

export const ClientCardMainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`;

export const ClientCardContainer = styled.div`
  padding: 20px;
  background-color: #242535;
  border-radius: 10px;
  border: 1px solid grey;
`;

export const ClientCardTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`;

export const ClientCardLabelText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;
export const ClientCardValueText = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`;

export const ClientCardButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-top: 10px;
`;
