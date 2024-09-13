import soleil from '../assets/images/sun.png'
import eau from '../assets/images/water.png'

function handleClick(quantite, type) {
    alert(`Cette plante necessite ${quantite} ${type}`)
}

function CareScale({ scaleValue, CareType }) {
    const range = [1, 2, 3]
    let quantite
    const string = CareType === 'lumiere' ? soleil : eau
    const type = string === soleil ? 'de soleil' : "d'eau"

    if(scaleValue===1){quantite = 'peu'}
    if(scaleValue===2){quantite = 'modérement'}
    if(scaleValue===3){quantite = 'beaucoup'}

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()} onClick={() => handleClick( quantite, type )}><img src={string} alt=""/></span> : null
            )}
            
        </div>
    )
}
    
export default CareScale