import { Liste_Plante } from '../data/liste_plante'
import PlanteItem from './PlantItem'
import { useState } from 'react'
import "../assets/styles/shoppingliste.css"


export function ShoppingListe({ cart, updateCart }) {
	const [choix_plante, SelectPlante] = useState('')
	const categories = Liste_Plante.reduce( (acc, plante) => acc.includes(plante.category) ? acc : acc.concat(plante.category),[] )

	return (
			<div className='lmj-shopping-list'>
				<select className='liste_deroulante' onChange={(e) => SelectPlante(e.target.value)}>
					<option value=''></option>
					{ categories.map( (cat) => ( <option value={cat}> { cat } </option> ) ) }
				</select>
				<ul className='lmj-plant-list'>
					{ Liste_Plante.map( (plante) => ( 
						<div>
							{ PlanteItem(plante.name, plante.category, plante.img, plante.id, plante.lumiere, plante.eau, plante.prix, choix_plante, cart, updateCart) } 
						</div>
                     ) ) }
				</ul>
			</div>)
}
