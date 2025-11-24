import './novidades.scss';
import bannerNovidades from '../../assets/BannerNovidades.png';
function Novidades() {

    return (
       <section className="novidades">
        <h2>Novidades</h2>
        <img src={bannerNovidades} alt="banner  com as Novidades da loja" />
       </section>    
    )
    
}
export default Novidades;