import styled from "styled-components";

export const ClientDetailHeading = styled.div`
  font-size: 32px;
  color: #fff;
  font-weight: 600;
`;

export const FilterMainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 350px 300px;
  align-items: center;
  grid-gap: 20px;
  color: #000;
`;

export const AddClientButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px;
`;

export const SearchInputField = styled.input`
  height: 45px;
  outline: none;
  border-radius: 10px;
  border: none;
  background-color: #fff;
  color: #000;
  font-size: 18px;
  padding: 0 26px;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const NoClientFoundText = styled.div`
  height: 200px;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
