import './Botao.css';

const Botao = (props) => {
    return <button className='btn'>{props.children}</button>
}

export default Botao;