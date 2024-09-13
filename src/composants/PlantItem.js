import CareScale from './CareScale'
import "../assets/styles/PlanteItem.css"
import image from '../assets/images/monstera.jpg'

function addToCart(name, price, cart, updateCart) {
    const savedCart = localStorage.getItem('cart')
    
	const currentPlantAdded = cart.find((plant) => plant.name === name)
	if (currentPlantAdded) {
		const cartFilteredCurrentPlant = cart.filter(
			(plant) => plant.name !== name
		)
		updateCart([
			...cartFilteredCurrentPlant,
			{ name, price, amount: currentPlantAdded.amount + 1 }
		])
	} else {
		updateCart([...cart, { name, price, amount: 1 }])
	}
    localStorage.setItem(savedCart,cart)
}


function PlantItem(name, category, cover, id, light, water, prix, choix_plante, cart, updateCart){
    
    return (choix_plante === category) || (choix_plante === '') ? ( <li className='lmj-plant-item-cover'>
                <img src={image} alt="" className='lmj-plant-item'/>

                <p className='texte_plante'>{ name } {prix}€</p>

	            <CareScale CareType='eau' scaleValue={water}/>
	            <CareScale CareType='lumiere' scaleValue={light}/>
                <button onClick={() => addToCart(name , prix, cart, updateCart)} > Acheter </button>
			</li>) : null
}
export default PlantItem