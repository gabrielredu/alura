import './Card.css';

const Card = (props) => {
    return (
        <div className='card'>
            <h2 className='card-username'>{props.username}</h2>
        </div>
    )
}

export default Card