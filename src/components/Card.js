import React from 'react'
import circles from '../img/circles.png'
import './styles/Card.css'


class Card extends React.Component {
    render(){

        const {title, description,imgs, leftcolor,rightcolor} = this.props

        const divStyle = {
            background: 'url('+circles+'), linear-gradient(to right,'+leftcolor+','+rightcolor+')'
        };
        
        return (
            <div className="card mx-auto Fitness-Card" 
                style={divStyle}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={imgs} className="float-right" alt='fitness'></img>
                        </div> 
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card