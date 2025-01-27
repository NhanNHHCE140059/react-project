import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Team = (props) => {
  useEffect(() => {
    AOS.init({ duration: 3000,
      offset:1,
      delay:3
     });
  }, []);
  return (
    <div id="team" className="text-center" data-aos="fade-up"
   >
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2 className="font-OP">Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id="row" className="text-center">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img border-GOLD" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
