import { ReactComponent as Logo } from '../../images/marca-conecta.svg';

import './footer.styles.scss';

const Footer = () => (
    <footer className='Footer'>
        <div className='footer-content'>
            <div className='footer-copyright'>
                Todos os direitos reservados © 2020 Conecta
            </div>
            <div className='footer-area-logo'>
                PROJETADO POR
                <Logo className='footer-image-logo' />
            </div>
        </div>
    </footer>
);
 
export default Footer;