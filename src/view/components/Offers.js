import React from "react";

import PriceHome from "../../image/priceHome.png";
import PriceBussines from "../../image/priceBussines.png";

export default function Tips() {
  return (
    <div class="offers">
      <div>
        <p>Para minha casa</p>
        <h1>100</h1>
        <h4>MEGA</h4>
        <img src={PriceHome} style={{ width: "100%" }}></img>
        <button>Contrate</button>
      </div>

      <div>
        <p>Para meu negócio</p>
        <h1>100</h1>
        <h4>MEGA</h4>
        <img src={PriceBussines} style={{ width: "100%" }}></img>
        <button>Contrate</button>
      </div>
    </div>
  );
}
