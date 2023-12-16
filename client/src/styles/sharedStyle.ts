import { Field } from "formik";
import { Link } from "react-router-dom";
import { keyframes, styled } from "styled-components";
export const Container = styled.div<any>`
  position: relative;
  width: ${(props) => (props.width ? props.width : "100%")};
  padding-right: var(1.5rem, 0.75rem);
  padding-left: var(1.5rem, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 90%;
  }
  @media (min-width: 768px) {
    max-width: 90%;
  }
  @media (min-width: 992px) {
    max-width: 90%;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

const opacityAnimation = keyframes`
0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const OpacityAnimation = styled.div<any>`
  animation: ${opacityAnimation} 1.5s;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const SkeletonLoadingAnimation = () => keyframes`
  0% {
    background:#2b3641
  }
  100% {
    background: #7A798A;
  }
`;

export const LoadingSpinnerContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1.5;
  border-radius: 10px;
  animation: ${SkeletonLoadingAnimation} 1s linear infinite alternate !important;
`;

export const Wrapper = styled.div`
  padding: 100px 0 100px 0;
`;
export const CardGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
`;

//register and sign in
export const InputMainContainer = styled.div`
  margin-top: 12px;
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.text};
  display: block;
  font-size: 18px;
  margin: 8px 0;
`;

export const InputFieldContainer = styled.div`
  position: relative;
`;

export const InputField = styled(Field)`
  height: 45px;
  width: 100%;
  background-color: #fff;
  color: #000;
  outline: none;
  border: 1px solid #3b3c4a;
  border-radius: 10px;
  padding: 0 20px;
  font-size: 18px;
  box-sizing: border-box;
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 20px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
`;
export const CreateCategory = styled.div<{ isCategory?: boolean }>`
  height: 45px;
  width: max-content;
  padding: 0 20px;
  background-color: ${({ isCategory, theme }) =>
    isCategory ? "#4b6bfb" : theme.categoryBg};
  border: ${({ isCategory }) =>
    isCategory ? "1px solid #4b6bfb" : "1px solid #3b3c4a"};
  color: ${({ isCategory, theme }) => (isCategory ? "#fff" : theme.text)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
`;
export const EditButton = styled.button<{ color: string }>`
  height: 45px;
  width: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ color }) => color};
  cursor: pointer;
  border-radius: 10px;
`;

export const LottieMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
export const LottieContainer = styled.div`
  height: 100px;
  width: 100px;
`;

export const Description = styled.div`
  font-size: 18px;
  color: #fff;
  margin: 5px 0 25px 0;
  text-align: center;
`;

export const ModalHeading = styled.div`
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  text-align: center;
`;

export const InputFieldMainWrapper = styled.div``;

export const InputFieldWrapper = styled.div`
  position: relative;
`;

export const PasswordHideUnHideContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 16px;
  display: flex;
  cursor: pointer;
`;
export const ErrorMessageText = styled.div`
  color: #ff0000;
  font-size: 16px;
`;
