import { useState } from "react";




import azul from "../../assets/azul.png";
import vermelho from "../../assets/vermelho.png";
import marrom from "../../assets/marrom.png"
import base from "../../assets/base.png"

function Lancamentos() {
  const [cor, setCor] = useState(vermelho);
  return (
    <>
      <h2>Lançamentos</h2>

      <img src={cor} alt="" />
      <button onClick={() => setCor(vermelho)}>vermelho</button>
      <button onClick={() => setCor(azul)}>azul</button>
      <button onClick={() => setCor(marrom)}>marrom</button>
       <button onClick={() => setCor(base)}>base</button>
    </>
  );
}
export default Lancamentos;