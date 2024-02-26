import { Component } from "react";
 
class Card extends Component{
    render(){
        const{id,name}= this.props.monster;
        return(
            <div className="card_item" key={id}>
            <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
            <h2>{name}</h2>
        </div>
        )
    }

}
export default Card;