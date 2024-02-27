import Card from "../card/card.components";

const CardList = ({ monsters }) => (
<div className='card'>
    {monsters.map((monster) => {
        return (
            <Card monster={monster} />
        )
    })
    }</div>)

export default CardList;