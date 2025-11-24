import { useState } from "react";

import "./lancamentos.scss";

// Import das imagens
import vermelho from "../../assets/vermelho.png";
import azul from "../../assets/azul.png";
import base from"../../assets/base.png";
import marrom from"../../assets/marrom.png";
import estrelas from"../../assets/estrelas.png";

import kitDeBatom1 from"../../assets/miniBatoons1.png";
import kitDeBatom2 from"../../assets/miniBatoons2.png";
import kitDeBatom3 from"../../assets/miniBatoons3.png";
function Lancamentos() {
  // Estado que guarda a cor (imagem) atual
  // O valor inicial é a imagem "vermelho"
  const [cor, setCor] = useState(vermelho);

  return (
    <>
       <h2>APROVEITE OS LANÇAMENTOS</h2>

    <section className="lancamentos">
      
    
      {/* A imagem exibida será sempre a do estado "cor" */}
      <article className="miniFiguras">
      <img  src={kitDeBatom1} alt="imagem com kit de batons " />
      <img  src={kitDeBatom2} alt="imagem com kit de batons " />
      <img  src={kitDeBatom3} alt="imagem com kit de batons " />
      </article>

      <article className="imagemPrincipal">
      
      <img src={cor} alt="Batom" />
      </article>
      
      
      <article className="batom-info">
    <div>
      <img className="estrelas" src={estrelas} alt="imagem de 5 Estrelas" />
      <h2>Matte Premium</h2>
      <h4>Cores disponíveis</h4>
      
      <div className="botoes">
      <button onClick={() => setCor(vermelho)} id="vermelho"></button>
      <button onClick={() => setCor(azul)} id="azul"></button>
      <button onClick={() => setCor(base)} id="base"></button>
      <button onClick={() => setCor(marrom)} id="marrom"></button>
      </div>

        <h3>Descrição</h3>
        <p>O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.</p>
    </div>
      
      

      

    
       </article>
  
    </section>
    </>
  );
}

export default Lancamentos;
