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

export const Services = [
  {
    name: "Executive Assessment",
    imageSrc: "assessment.png",
    href: "/executive-assessment",
  },
  {
    name: "Executive Search",
    imageSrc: "search.png",
    href: "/executive-search",
  },
  { name: "Board Services", imageSrc: "services.png", href: "/board-services" },
  {
    name: "Leadership Development",
    imageSrc: "development.png",
    href: "/leadership-development",
  },
  {
    name: "Expatraites",
    imageSrc: "exchange.png",
    href: "/expatraites",
  },
  // {
  //   name: "Global Talent Exchange",
  //   imageSrc: "exchange.png",
  //   href: "/talent-exchange",
  // },
  {
    name: "Executive Coaching",
    imageSrc: "coaching.png",
    href: "/executive-coaching",
  },
];
