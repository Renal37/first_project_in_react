import { Component } from "react";
import Card from "../card/card.components";

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className='card' >
                {monsters.map((monster) => {
                    return (
                        <Card monster={monster} />
                    )
                })}</div>
        )
    }
}
export default CardList;