import React from 'react'
import './ColorCardPaletteList.css'
import ColorCardPalette from '../CardColorPalette/CardColorPalette'




const ColorCardPaletteList = ({ colors }) => {

    return (
        <div className='cards-container'>
            {
                colors.map(
                    (colorCardInfo) => {
                        return <ColorCardPalette likes={colorCardInfo.likes} time={colorCardInfo.time} colors={colorCardInfo.colors} />
                    }
                )
            }
        </div>

    )


}


export default ColorCardPaletteList

