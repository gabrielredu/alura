import './Time.css';

const Time = (props) => {
    return (
        <section className='time'>
            <h3>
                {props.nomeTime}
            </h3>
        </section>
    )
}

export default Time;