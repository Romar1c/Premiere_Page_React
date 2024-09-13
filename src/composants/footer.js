import { useState } from 'react'
import '../assets/styles/footers.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
    const isInputError = inputValue.includes('@')
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>Pour les passionné·e·s de plantes 🌿🌱🌵</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>

            <input type='email' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={() => {isInputError ? alert(inputValue): alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")}}>Envoyer</button>

		</footer>
	)
}

export default Footer