import React, { useRef, useEffect } from 'react';

// Import UI components
import TextArea from './components/TextArea';
import TextAreaInput from './components/TextAreaInput';
import Label from './components/Label';
import StatusIndicator from './components/StatusIndicator';
import ClearButton from './components/ClearButton';


// TextArea input height object
const inputHeight = {
  default: "35px"
}





function WETextArea({ id, value, disabled = false, status = 'idle', onChange, ...props }) {


  const inputRef = useRef(null);


  const clearTextField = (e) => {
    e.preventDefault();
    e.target = inputRef.current;
    e.target.value = "";
    // onChange();

  }


  const inputChanged = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let target = e.target;
    if (target.localName.toLowerCase() === "textarea") {
      if (inputRef.current === null) {
        inputRef.current = target;
        inputHeight.default = target.clientHeight + "px";
        inputHeight.current = target.clientHeight + "px";
      }
      let textArea = inputRef.current;
      if (textArea.value === "") {
        textArea.style.height = inputHeight.default;
        onChange(e);
        return;
      }
      textArea.style.height = "auto";
      textArea.style.height = `calc(${textArea.scrollHeight}px + 0.5em)`;
      onChange(e)
    }
  }



  return (
    <TextArea>

      {(status === "busy") && <StatusIndicator width={25} height={25} />}

      {(status === "idle" && value !== "") && <ClearButton width={25} height={25} onClick={(e) => clearTextField(e)} />}

      <TextAreaInput value={value} onChange={(e) => inputChanged(e)} placeholder={props.name} height={props.height} maxHeight={props.maxHeight} />

      <Label name={props.name}>
        {props.name}
      </Label>

    </TextArea>

  );
}

export default WETextArea;