import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar () {
        aoFavoritar(colaborador.id);
    }

    return (
    <div className="colaborador">
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <button className='deletar' onClick={() => aoDeletar(colaborador.id)}>Remover colaborador</button>
            {colaborador.favorito ?
            <p className='favoritar favoritado' onClick={favoritar}>Favoritado</p> :
            <p className='favoritar' onClick={favoritar}>Não favoritado</p>
            }
        </div>
    </div>
    )
}

export default Colaborador