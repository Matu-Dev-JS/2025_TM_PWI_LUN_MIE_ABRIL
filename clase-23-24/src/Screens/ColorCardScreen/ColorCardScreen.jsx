import React from 'react'
import ColorCardPaletteList from '../../Components/ColorCardPaletteList/ColorCardPaletteList'

const ColorCardScreen = () => {
    const colors = [
            { likes: 9, time: '58 minutes', colors: ['#1B3C53', '#456882', '#D2C1B6', '#F9F3EF'], id: 1 },
            { likes: 9, time: '58 minutes', colors: ['#748873', '#D1A980', '#E5E0D8', '#F8F8F8'], id: 2 },
            { likes: 9, time: '58 minutes', colors: ['#5EABD6', '#FEFBC7', '#FFB4B4', '#E14434'], id: 3 },
        ]
    return (
        <ColorCardPaletteList colors={colors} />
    )
}

export default ColorCardScreen