import React from "react";
import { Media } from "reactstrap";

const Person = () => {
  return (
    <div style={{ margin: "20px 0px" }}>
      <Media>
        <Media left href="#">
          <Media
            bottom
            className=" mt-2 mb-2 mr-2"
            object
            src="https://via.placeholder.com/100x100/#b2b2b2"
            alt="Generic placeholder image"
            style={{
              boxSizing: "border-box"
            }}
          />
        </Media>
        <Media body>
          <Media heading>Person Name</Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
    </div>
  );
};

export default Person;
