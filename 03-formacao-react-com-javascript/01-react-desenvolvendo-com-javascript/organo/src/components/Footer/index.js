import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='footer-social'>
                <li className='footer-social-item'>
                    <img src='/imgs/fb.png' alt='Facebook' />
                </li>
                <li className='footer-social-item'>
                    <img src='/imgs/tw.png' alt='Twitter' />
                </li>
                <li className='footer-social-item'>
                    <img src='/imgs/ig.png' alt='Instagram' />
                </li>
            </ul>
            <img className='footer-title' src='/imgs/logo.png' alt='Organo' />
            <h3 className='footer-text'>Desenvolvido por gbrlrd.</h3>
        </footer>
    )
}

export default Footer;