import React, { Component } from 'react';


class Waifu extends Component {
    render() { 
        const { waifu } = this.props;
        const {
            id,
            name,
            image,
            description
        } = waifu

        return (
            <div className="figure">
                <h3>{name}</h3>
                <img src={image} alt="waifu!!!!"></img>
                <h4>{description}</h4>
                <button onClick={() => this.props.onDelete(id)}>Delete</button>
            </div>
         );
    }
}
 
export default Waifu;