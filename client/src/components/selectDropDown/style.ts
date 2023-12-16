import styled from "styled-components";
import { colors } from "../../styles/theme";

export const DropDownMainLayout = styled.div`
  position: relative;
`;

export const DropDownMainContainer = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  border: 1px solid ${colors.borderColor};
  border-radius: 10px;
  cursor: pointer;
  background-color: ${colors.white};
`;
export const DropDownContainer = styled.div<any>`
  font-size: 16px;
  font-weight: 500;
  color: ${({ selectedData }: any) =>
    selectedData ? colors.black : colors.borderColor};
  text-transform: capitalize;
`;
export const DropDownArrowIcon = styled.div`
  display: flex;
`;
export const DropDownContentContainer = styled.div`
  padding: 8px 0px;
  border: 1px solid ${colors.borderColor};
  border-radius: 10px;
  margin-top: 10px;
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  top: 47px;
  max-height: 220px;
  overflow: auto;
  background-color: ${colors.white};
  z-index: 100;
`;
export const DropDownContent = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.black};
  margin: 8px 0;
  padding: 10px 20px;
  cursor: pointer;
  transition: linear 0.2s;
  text-transform: capitalize;
  :hover {
    background-color: ${colors.mainColor};
    color: ${colors.white};
  }
`;
