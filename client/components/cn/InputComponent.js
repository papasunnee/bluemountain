import React, { Fragment } from "react";
import { Label, Input } from "reactstrap";

const InputComponent = props => {
  return (
    <Fragment>
      <Label for={props.labelFor || "exampleLabel"}>
        {props.label || "Label"}
      </Label>
      <Input
        style={{
          borderLeft: "4px solid #4285F4 ",
          borderRadius: "0px",
          backgroundColor: "#F0F0F0"
        }}
        type={props.type || "text"}
        name={props.name || "file"}
        id={props.id || "file"}
        {...props}
      />
    </Fragment>
  );
};

export default InputComponent;
