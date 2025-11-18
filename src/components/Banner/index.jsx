import banner from "../../assets/Banner.png"

import "./banner.scss";

function Banner() {
    return(
        <>
       <nav>
        <img src={banner} alt="banner de promoção do novo produto 'revitalift' sérum preenchedor" />
       </nav>
        </>
    );
    
}

export default Banner;