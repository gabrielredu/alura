import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [time, setTime] = useState('Selecione uma opção')

    function onSubmit (e) {
        e.preventDefault();
        console.log(`Os dados do formulário são: Nome: ${nome}, Cargo: ${cargo}, URL da imagem: ${img} e o Time: ${time}`);
        props.novoColaborador({
            nome,
            cargo,
            img,
            time
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={onSubmit}>
                <h2>Preencha os campos para criar o card do colaborador</h2>
                <CampoTexto aoAlterado={valor => setNome(valor)} valor={nome} required={true} label='Nome' placeholder='Digite seu nome' />
                <CampoTexto aoAlterado={valor => setCargo(valor)} valor={cargo} required={true} label='Cargo' placeholder='Digite seu cargo' />
                <CampoTexto aoAlterado={valor => setImg(valor)} valor={img} label='Imagem' placeholder='Informe o endereço da imagem' />
                <ListaSuspensa aoAlterado={valor => setTime(valor)} valor={props.times} required={true} label='Time' itens={props.times} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;