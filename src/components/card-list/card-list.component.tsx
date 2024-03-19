import Card from "../card/card.components";
import { Monster } from "../../App";

type CardProps = {
    monsters:Monster[];
}

const CardList = ({monsters}:CardProps) =>{
        return (
            <div className='card' >
                {monsters.map((monster) => {
                    return (
                        <Card monster={monster} />
                    )
                })}</div>
        )
}
export default CardList;