
import "./looks.scss";

import labios from "../../assets/CardLabios.png"
import olhos from "../../assets/CardOlhos.png"          
import rosto from "../../assets/cardRosto.png"
import tendencias from "../../assets/CardTendencias.png"

function Looks() {
 
    return (
        <section>
           
             <h2>LOOKS E DICAS DE MAQUIAGEM</h2>
             
           <article>
          

            <img src={labios} alt="Labios" />
            <img src={olhos} alt="Olhos" />
            <img src={rosto} alt="Pele" />
            <img src={tendencias} alt="Tendencias" />
           </article>
        </section>
        
    );
}



export default Looks;