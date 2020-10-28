import React from "react";

import Velocity from "../../image/velocity.png";
import Social from "../../image/social.png";

export default function Offers() {
  return (
    <div class="tips">
      <div>
        <img style={{ width: "100%" }} src={Velocity}></img>
        <h3>Teste sua internet</h3>
        <p>A JNNET disponibiliza um velocímetro para você</p>
      </div>

      <div>
        <img style={{ width: "100%" }} src={Social}></img>
        <h3>Conheça nossas redes sociais</h3>
        <p>Siga-nos para ficar por dentro de tudo que acontece</p>
      </div>
    </div>
  );
}
