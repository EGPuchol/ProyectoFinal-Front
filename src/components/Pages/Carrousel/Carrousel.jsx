import OwlCarousel from 'react-owl-carousel';
import "./Carrousel.css" 
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from "../../../images/servicio-animal.png";
import img2 from "../../../images/movil_animal.png";
import img3 from "../../../images/cajita_animal.png";


const options = {
    items: 1,
    loop:true,
    autoplay: false,
    autoplayTimeout: 4000,
    animateOut:'slideOutUp',
    nav:false,
    dots:true,
    center:true,
    margin:10,
    responsive:{
        1100:{
            items:1,
        },
        724:{
            items:1,
        },
        500: {
            items:1,
        },
        
        370:{
            items:1,
            innerWidth: "100%",
            outerWidth: "100%",
        },
    }
}

export const Carrousel = () => {
    return (
      <div>
        <OwlCarousel className='owl-theme' {...options}>
    <div class='item1'>
        <img className='imagen' src={img1} alt="img1" />
        <h4 className='texto1'>Encuentra todo tipo de servicios que tienes cerca de ti</h4>
    </div>
    <div class='item2'>
        <img className='imagen' src={img2} alt="img2" />
        <h4>Adopta desde tu movil</h4>
        <p>Puedes acceder al perfil de muchos animales que estan en adopcion y filtrarlos para encontrar el que mejor se adapte a ti</p>
    </div>
    <div class='item3'>
        <img className='imagen' src={img3} alt="img3" />
        <h4>Si eres una asociacion sube a tus peludos para darles más difusion </h4>
    </div>
        </OwlCarousel>
      </div>
    )
  }
  