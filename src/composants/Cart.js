import { useState, useEffect } from 'react'
import '../assets/styles/cart.css'

function Cart({ cart, updateCart }) {
	
	const [isOpen, setIsOpen] = useState(true)
	const items = Object.keys(cart)
	const total = items.reduce( (acc, item) => acc + cart[item].amount * cart[item].price, 0 )
	
	useEffect(() => {
		document.title = `Panier: ${total}€ d'achats`
	}, [total])

	return isOpen ? (
		<div className='lmj-cart'>
			<button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)} > Fermer </button>

			<h2>Panier</h2>
			{cart.map(({ name, price, amount }, index) => (
				<div key={`${name}-${index}`}>
					{name} {price}€ x {amount}
				</div>
			))}
			<h3>Total : {total}€</h3>
			
			<button onClick={() => updateCart([])}>Vider le Panier</button>
		</div>
	) : (
		<div className='lmj-cart'>
			<button	className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart