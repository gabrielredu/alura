import './Time.css';

const Time = (props) => {

    const cssVar = {
        '--bg-claro': props.corSecundaria,
        '--bg-escuro': props.corPrimaria
    }

    console.log(props.timePos)
    return (
        <section className='time' style={cssVar}>
            <style>
                {/* {`.time h3:nth-of-type(${props.timePos})::after {
                    background-color: ${props.corPrimaria}
                }`} */}
            </style>
            <h3 style={{ color: props.corPrimaria }}>
                {props.nomeTime}
            </h3>
        </section>
    )
}

export default Time;