import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [time, setTime] = useState('')

    function onSubmit (e) {
        e.preventDefault();
        console.log('tá funcionando?', nome, cargo, img, time);
    }

    const times = [
        'Programação', 'Front-End', 'Data Science', 'DevOps', 'UX e Design', 'Mobile', 'Inovação e Gestão'
    ]

    return (
        <section className='formulario'>
            <form onSubmit={onSubmit}>
                <h2>Preencha os campos para criar o card do colaborador</h2>
                <CampoTexto aoAlterado={valor => setNome(valor)} valor={nome} required={true} label='Nome' placeholder='Digite seu nome' />
                <CampoTexto aoAlterado={valor => setCargo(valor)} valor={cargo} required={true} label='Cargo' placeholder='Digite seu cargo' />
                <CampoTexto aoAlterado={valor => setImg(valor)} valor={img} label='Imagem' placeholder='Informe o endereço da imagem' />
                <ListaSuspensa aoAlterado={valor => setTime(valor)} valor={time} required={true} label='Time' itens={times} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;