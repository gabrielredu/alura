import Card from '../Card';
import './Time.css';

const Time = (props) => {

    const cssVar = {
        '--bg-claro': props.corSecundaria,
        '--bg-escuro': props.corPrimaria
    }
    return (
        props.colaboradores.length > 0 ?
            <section className='time' style={cssVar}>
                <h3 style={{ color: props.corPrimaria }}>
                    {props.nomeTime}
                </h3>
                <ul className='time-list'>
                    {props.colaboradores.map(colaborador => <Card style={cssVar} nome={colaborador.nome} cargo={colaborador.cargo} img={colaborador.img} key={props.index}/>)}
                </ul>
            </section>
        :
            <section className='time' style={cssVar}>
                <h3 style={{ color: props.corPrimaria }}>
                    {props.nomeTime}
                </h3>
                <ul className='time-list'>
                    <h2>Nenhuma pessoa cadastrada</h2>
                </ul>
            </section>
    )
}

export default Time;