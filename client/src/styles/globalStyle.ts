import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
  background-color: ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.text};
    transition: all linear 0.2s;
}
scrollbar-width: thin;
  scrollbar-color: #4b6bfb #f5f5f5;

  ::-webkit-scrollbar {
    width: 8px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #4b6bfb;
    border-radius: 4px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 4px;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    width: 8px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4b6bfb; 
    border-radius: 4px; 
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 4px;
  }


  .tooltip-container {
  background : blue !important;
  border:none;
  border-radius: 10px ;
  width: 300px;
  padding:15px;
  /* margin-left:10px; */
}
.tooltip-arrow[data-placement*='right']::after {

}
//TippyToolTip
.tippy-box[data-theme~='lightGrey'] {

  background: blue;
  border: none;
  color: #fff;
  border-radius: 10px;
}

.tippy-box[data-theme~='lightGrey'] > .tippy-svg-arrow {
 
  fill: blue;
}
.tippy-box[data-theme~='lightGrey'][data-placement^='top'] > .tippy-arrow::before {

  border-top-color: blue;
}
.tippy-box[data-theme~='lightGrey'][data-placement^='bottom'] > .tippy-arrow::before {

  border-bottom-color: blue;
}
.tippy-box[data-theme~='lightGrey'][data-placement^='left'] > .tippy-arrow::before {

  border-left-color: blue;
}
.tippy-box[data-theme~='lightGrey'][data-placement^='right'] > .tippy-arrow::before {

  border-right-color: blue;
}

.tippy-box[data-theme~="lightGrey"] .tippy-content {
  padding: 13px;
}
`;
