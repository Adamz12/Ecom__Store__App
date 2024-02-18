import React from "react";
import Nav from "../components/Nav";
import ShoppingCatagory from "../components/ShoppingCatagory";
import Shoppingviewer from "../components/Shoppingviewer";

function Home() {
  return (
    <div>
      <Nav />
      <Shoppingviewer />
      <ShoppingCatagory />
    </div>
  );
}

export default Home;
