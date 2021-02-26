import './menu.styles.scss';

const Menu = () => (
    <nav className='menu'>
        <ul>
            <li><a className='menu-item' href="./"><i class="fab fa-facebook-square"></i></a></li>
            <li><a className='menu-item' href="./"><i class="fab fa-instagram"></i></a></li>
        </ul>
    </nav>
);
 
export default Menu;