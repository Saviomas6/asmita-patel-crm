import { Input, Label, Wrapper } from "./style";

interface I_Props {
  label: string;
  isChecked: boolean;
  handleChecked(): void;
}
const ToggleButton = ({ label, isChecked, handleChecked }: I_Props) => {
  return (
    <Wrapper>
      <Label htmlFor={label} toggleSwitch={isChecked}>
        <Input
          id={label}
          type="checkbox"
          checked={isChecked}
          onChange={handleChecked}
        />
      </Label>
    </Wrapper>
  );
};

export default ToggleButton;
