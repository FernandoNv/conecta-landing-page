import { ReactComponent as Logo } from '../../images/marca-conecta.svg';
import Menu from '../Menu/menu.component';

import './header.styles.scss';

const Header = () => (
    <header className='Header'>
        <Logo className='logo' />
        <Menu />
    </header>
);
 
export default Header;