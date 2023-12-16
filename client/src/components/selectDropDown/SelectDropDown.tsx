import * as Styled from "./style";
import { handlePrecision } from "../../utils/utils";
import { IoIosArrowDown } from "react-icons/io";

interface I_SelectDropDownProps {
  selectedData?: string;
  setSelectedData?: any;
  isDropDownOpen?: boolean;
  setIsDropDownOpen?: any;
  dropDownData?: string[];
  count?: any;
  setFieldValue?: any;
  fieldValueName?: string;
}

const SelectDropDown = ({
  selectedData,
  setSelectedData,
  dropDownData,
  isDropDownOpen,
  setIsDropDownOpen,
  count,
}: I_SelectDropDownProps) => {
  return (
    <Styled.DropDownMainLayout>
      <Styled.DropDownMainContainer
        onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
        <Styled.DropDownContainer selectedData={selectedData}>
          {selectedData === ""
            ? "Select"
            : handlePrecision(selectedData, count)}
        </Styled.DropDownContainer>
        <Styled.DropDownArrowIcon>
          <IoIosArrowDown size={20} />
        </Styled.DropDownArrowIcon>
      </Styled.DropDownMainContainer>
      {isDropDownOpen && (
        <Styled.DropDownContentContainer>
          {dropDownData?.map((value, index) => (
            <Styled.DropDownContent
              key={index}
              onClick={() => {
                setSelectedData(value);
                setIsDropDownOpen(!isDropDownOpen);
              }}>
              {handlePrecision(value, count)}
            </Styled.DropDownContent>
          ))}
          {dropDownData?.length === 0 && (
            <Styled.DropDownContent>No Data Found</Styled.DropDownContent>
          )}
        </Styled.DropDownContentContainer>
      )}
    </Styled.DropDownMainLayout>
  );
};

export default SelectDropDown;
