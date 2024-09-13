import '../assets/styles/banner.css'
import logo from "../assets/images/logo.png"

function Banner(nom) {
  return(
    <div className="Banniere">
      <img src={logo} alt='La maison jungle' className='Banniere_logo' />
       <h1 className="Banniere_titre">{nom}</h1>
    </div>);
}

export default Banner;
