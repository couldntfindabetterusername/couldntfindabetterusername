import React from "react";
import "./Socials.css";
import data from "../../data";
import { useLocation } from "react-router-dom";

const Socials = () => {
  const url = useLocation();

  const { socials } = data;

  //   const gridLength = ;

  return (
    <aside className={url.pathname === "/" ? "" : "aside-aside"}>
      <span className={url.pathname === "/" ? "" : "span-aside"}>
        Connect with me here:
      </span>
      <section
        className={url.pathname === "/" ? "" : "section-aside"}
        style={{
          gridTemplateColumns: `${
            url.pathname === "/" ? "repeat(" + socials.length + ",1fr)" : "1fr"
          }`,
        }}
      >
        {socials.map((social, id) => {
          return (
            <div className="social link">
              <a href={social.link}>
                <img
                  width="40px"
                  src={social.iconLink}
                  alt={social.name}
                  className={url.pathname === "/" ? "" : "img-aside"}
                />
              </a>
            </div>
          );
        })}
      </section>
    </aside>
  );
};

export default Socials;
