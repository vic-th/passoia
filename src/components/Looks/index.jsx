

import "./Looks.scss"

import labios from "../../assets/labios.png"
import olhos from "../../assets/olhos.png"          
import rosto from "../../assets/rosto.png"
import tendencias from "../../assets/tendencias.png"

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