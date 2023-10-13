import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {

    function onSubmit (e) {
        console.log('tá funcionando?')
        e.preventDefault();
    }

    const times = [
        'Programação', 'Front-End', 'Data Science', 'DevOps', 'UX e Design', 'Mobile', 'Inovação e Gestão'
    ]

    return (
        <section className='formulario'>
            <form onSubmit={onSubmit}>
                <h2>Preencha os campos para criar o card do colaborador</h2>
                <CampoTexto required={true} label='Nome' placeholder='Digite seu nome' />
                <CampoTexto required={true} label='Cargo' placeholder='Digite seu cargo' />
                <CampoTexto label='Imagem' placeholder='Informe o endereço da imagem' />
                <ListaSuspensa required={true} label='Time' itens={times} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;