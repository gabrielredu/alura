import './Card.css';

const Card = ({ nome, cargo, img }) => {
    return (
        <li className='card' key={nome}>
            <div className='card-img'>
                <img src={img} alt={nome} />
            </div>
            <div className='card-info'>
                <h4 className='card-info-name'>{nome}</h4>
                <p className='card-info-role'>{cargo}</p>
            </div>
        </li>
    )
}

export default Card