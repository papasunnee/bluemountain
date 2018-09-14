import React, { Component, Fragment } from "react";

export default class DoubleParagraph extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className="text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero
            sapiente dolorem rem ipsam enim reprehenderit architecto molestiae
            ducimus aperiam, aut dolorum eos facilis vero alias tempore, hic
            assumenda? Porro! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Tenetur blanditiis harum deleniti aut ab labore
            quam eaque nesciunt fuga expedita officiis odio voluptatibus, illum
            vero fugiat error debitis saepe qui!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero
            sapiente dolorem rem ipsam enim reprehenderit architecto molestiae
            ducimus aperiam, aut dolorum eos facilis vero alias tempore, hic
            assumenda? Porro! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Tenetur blanditiis harum deleniti aut ab labore
            quam eaque nesciunt fuga expedita officiis odio voluptatibus, illum
            vero fugiat error debitis saepe qui!
          </p>
        </div>
      </Fragment>
    );
  }
}
