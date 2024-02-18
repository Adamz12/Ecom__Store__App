import React from "react";
import headphones from "../assets/headphones.webp";
import laptops from "../assets/laptops.png";
import phones from "../assets/phones.png";

function ShoppingCatagory() {
  return (
    <section id="Shopping-catagory">
      <div className="container">
        <div className="row">
          <div className="catagory__wrapper">
            <div className="item__catagory">
              <figure className="catagory__item--wrapper">
                <img src={headphones} alt="" className="catagory--item__img" />
              </figure>
              <h1 className="catagory__name">Headphones</h1>
            </div>
            <div className="item__catagory">
              <figure className="catagory__item--wrapper">
                <img src={laptops} alt="" className="catagory--item__img" />
              </figure>
              <h1 className="catagory__name">Laptops</h1>
            </div>
            <div className="item__catagory">
              <figure className="catagory__item--wrapper">
                <img src={phones} alt="" className="catagory--item__img" />
              </figure>
              <h1 className="catagory__name">Phones</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCatagory;
