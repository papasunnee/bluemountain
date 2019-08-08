import React from "react";

const Person = () => {
  return (
    <div
      style={{ margin: "20px 0px", width: "100%", backgroundColor: "#A3A3A3" }}
    >
      <div style={{ height: "200px", backgroundColor: "#DADADA" }} />
      <div style={{ padding: "7px 15px" }}>
        <h5>Lorem Ipsum Dior</h5>
        <p>
          Aliquam ante. Nunc dapibus tortor vel mi dapibus sollicitudin. Nulla
          quis diam. Quis autem vel eum iure reprehenderit qui in eaa.
        </p>
      </div>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Person;
