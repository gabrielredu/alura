import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(`${time.cor}`, '0.4') }}>
            <input type='color' onChange={event => {
                mudarCor(time.id, event.target.value)
            }} value={time.cor} className='input-color' />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={aoDeletar} aoFavoritar={aoFavoritar} />
                }
                )}
            </div>
        </section>

    )
}

export default Time