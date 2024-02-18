import React from "react";
import Earphones from "../assets/headphone.png";

function Shoppingviewer() {
  return (
    <section id="shoppingviewer">
      <div className="container">
        <div className="row">
          <div className="items__wrapper">
            <div className="item__header">
              <h3 className="item__type">Beats Solo</h3>
              <h1 className="item__feature">Wireless</h1>
              <h1 className="item__name">HEADPHONES</h1>
              <button className="shopping__btn">SHOP NOW</button>
            </div>
            <figure className="item__img--wrapper">
              <img src={Earphones} alt="" className="item__img" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shoppingviewer;
