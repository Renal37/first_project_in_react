import { Monster } from "../../App";

type CardProps = {
    monster:Monster;
}

const Card= ({monster:{id,name}}:CardProps)=>{

        return(
            <div className="card_item" key={id}>
            <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
            <h2>{name}</h2>
        </div>
        )
    }

export default Card;