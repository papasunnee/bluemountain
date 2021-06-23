import React, { Component, Fragment } from "react";

export default class TextComponent extends Component {
  constructor(props){
    super(props) ;
  }
  state = {};
  render() {
    return (
      <Fragment>
        <h2
          style={{
            background: `${this.props.color || ""}`,
            padding: "5px",
            textIndent : '10px',
            color: `${this.props.textColor || "#fff"}`,
            marginBottom: "20px"
          }}
        >
          Lorem ipsum dolor sit amet,
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          officia beatae officiis. Sint, ad dolores. Hic commodi officia ab? At
          odio quasi cum modi nulla atque, neque repellendus minima ad. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Expedita officia
          beatae officiis. Sint, ad dolores. Hic commodi officia ab? At odio
          quasi cum modi nulla atque, neque repellendus minima ad.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          officia beatae officiis. Sint, ad dolores. Hic commodi officia ab? At
          odio quasi cum modi nulla atque, neque repellendus minima ad. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Expedita officia
          beatae officiis. Sint, ad dolores. Hic commodi officia ab? At odio
          quasi cum modi nulla atque, neque repellendus minima ad.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          officia beatae officiis. Sint, ad dolores. Hic commodi officia ab? At
          odio quasi cum modi nulla atque, neque
        </p>
      </Fragment>
    );
  }
}
