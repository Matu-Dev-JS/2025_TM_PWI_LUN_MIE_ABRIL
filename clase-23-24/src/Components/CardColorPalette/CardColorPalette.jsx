import React from "react";
import "./CardColorPalette.css";



const ColorCardPalette = ({ likes, time, colors }) => {
    
    /* Las listas de JSX en react se imprimen directamente */
    const colors_list_jsx = colors.map(
        (color) => {
            return (
            <div className='color' style={ { backgroundColor: color } } title={`Color: ${color}`}>
                <span>{color}</span>{/* Texto que se ve dentro del color */}
            </div>
            )
        }
    )

    return (
        <article className="color-card-palette">
            <div className='colors-container'>
                {
                    colors_list_jsx
                }
            </div>
            <div className='card-bottom'>
                <button className='card-bottom_likes'>
                    <i className="card-bottom_likes-icon bi bi-heart"></i>
                    <span className="card-bottom_likes-number">{likes}</span>
                </button>
                <span className='time'>{time}</span>
                
            </div>
        </article>

    )
}

export default ColorCardPalette


