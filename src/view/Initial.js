import React, { useState } from "react";

import Logo from "../image/logo.png";
import Header from "../image/header.png";

import Offers from "./components/Offers";
import Tips from "./components/Tips";

export default function Initial() {
  const [showOptions, setShowOptions] = useState(false);

  const option = () => {
    showOptions ? setShowOptions(false) : setShowOptions(true);
  };

  return (
    <div>
      <div class="color-top">
        <div class="header">
          <div>
            <img class="image-logo" src={Logo}></img>
          </div>

          <div class="options">
            <a>Quem somos</a>
            <a>Planos</a>
            <a>Contato</a>
            <a>Área do cliente</a>
          </div>
        </div>

        <div class="button-menu">
          <button onClick={option}>Menu</button>
        </div>

        {showOptions && (
          <div class="nave">
            <a>Quem somos</a>
            <a>Planos</a>
            <a>Contato</a>
            <a>Área do cliente</a>
            <button onClick={option}>Fechar</button>
          </div>
        )}
      </div>

      <div class="banner">
        <img src={Header} style={{ width: "100%", height: "100%" }}></img>
      </div>

      <Offers />

      <h1 class="tips-jnnet">DICAS DA JNNET</h1>

      <Tips />

      <div class="color-bottom">
        <div class="header-bottom">
          <div>
            <img class="image-logo-bottom" src={Logo}></img>
          </div>

          <div class="options-bottom">
            <a>Quem somos</a>
            <a>Planos</a>
            <a>Contato</a>
            <a>Área do cliente</a>
            <h4>Rua Pedro Nolasco, 115, Centro, João Neiva - ES</h4>
            <h4>0800 500 4650</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
