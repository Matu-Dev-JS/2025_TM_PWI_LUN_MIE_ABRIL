
### Tarjeta de seleccion de color

Debes hacer un componente llamado ColorCardPalette que reciba por props:  (likes: Number, time: String, colors: Array)
Deben verse igual a los de la pagina original

Ejemplo de uso: 
<CardColorPalette 
    likes={9} 
    time={'58 minutes'} 
    colors={['#2132DS', '#2132DS','#2132DS', '#2132DS']} 
/>

### Lista de tarjetas de colores

Debes hacer un componente llamado ColorCardPaletteList que reciba por props:  (colors: Array)
Deben verse igual a los de la pagina original

Ejemplo de uso:
<CardColorPaletteList 
    colors={[
        {likes: 9, time: '58 minutes', colors: ['#1B3C53', '#456882','#D2C1B6', '#F9F3EF']},
        {likes: 9, time: '58 minutes', colors: ['#748873', '#D1A980','#E5E0D8', '#F8F8F8']},
        {likes: 9, time: '58 minutes', colors: ['#5EABD6', '#FEFBC7','#FFB4B4', '#E14434']},
    ]}
/>