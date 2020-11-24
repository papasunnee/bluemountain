import React from "react";

export default () => {
  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <form action="">
        <div className="form-group">
          <label htmlFor="fullname">Fullname</label>
          <input type="text" className="form-control" name="fullname" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" className="form-control" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="service">Select Sevice</label>
          <select name="service" id="service" className="form-control">
            {Sectors.map(({ name }, index) => {
              return (
                <option key={index} value={index}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            className="form-control"
          ></textarea>
        </div>

        <button className="btn btn-primary" type="submit">
          Send Request
        </button>
      </form>
    </div>
  );
};

export const Sectors = [
  { name: "Energy, Oil & Gas", href: "energy_oil_gas", imageSrc: "energy" },
  { name: "Healthcare", href: "health_care", imageSrc: "healthcare" },
  {
    name: "Telecommunication",
    href: "telecommunication",
    imageSrc: "telecommunication",
  },
  { name: "Technology", href: "technology", imageSrc: "technology" },
  { name: "Government", href: "government", imageSrc: "government" },
  { name: "Banking & Finance", href: "banking_finance", imageSrc: "banking" },
  { name: "Agriculture", href: "agriculture", imageSrc: "agriculture" },
  { name: "Pharmaceuticals", href: "pharmaceuticals", imageSrc: "pharmacy" },
  { name: "FCMG", href: "fmcg", imageSrc: "fmcg" },
  { name: "Non Government", href: "non-governmental", imageSrc: "banking" },
  { name: "Education", href: "education", imageSrc: "banking" },
  { name: "Manufacturing", href: "manufacturing", imageSrc: "banking" },
];
