import star from '../public/star.png'
import './css/cards.css'

export default function Card(props){
    return(
        <div className="card">
            <img src={props.img} className='card--img' alt="Picture of Katie Zaferes" />
            <div className="card--rating">
                <img src={star} className='card--star' alt="Star icon" />
                <span>{props.rating}</span>
                <span className='gray'>({props.reviewCount}) •</span>
                <span className='gray'>{props.country}</span>
            </div>
            <p className="card--desc">{props.title}</p>
            <p className="card--price"><span>From ${props.price}</span> / person</p>
        </div>
    )
}