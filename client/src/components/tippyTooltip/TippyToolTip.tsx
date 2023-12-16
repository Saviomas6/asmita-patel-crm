import Tippy from "@tippyjs/react";

interface ToolTip {
  toolTipContent: JSX.Element | any;
  children: any;
  placement: any;
}
const TippyToolTip = ({ toolTipContent, placement, children }: ToolTip) => {
  return (
    <Tippy
      maxWidth="400px"
      offset={[0, 20]}
      theme="lightGrey"
      placement={placement}
      interactive={true}
      content={toolTipContent}>
      {children}
    </Tippy>
  );
};

export default TippyToolTip;
