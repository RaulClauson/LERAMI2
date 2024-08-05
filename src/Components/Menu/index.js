/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo_icon from '../../svgs/Logo/Logo_icon';
import Logo_name from '../../svgs/Logo/Logo_name';
import './Menu.css';

const Menu = () => {
    return (
        <nav>
            <header>
                <div className='logo'>
                    <Logo_icon width='17' height='17'></Logo_icon>
                    <Logo_name></Logo_name>
                </div>
                <div>
                    <a href="" className='contato_btn'>
                        <div className='ball'></div>
                        <p>CONTATO</p>
                    </a>
                    <a href="" className='menu_btn'>
                        MENU
                    </a>
                    <a href="" className='menu_btn_mobile'>
                        <Logo_icon width='17' height='17'></Logo_icon>
                    </a>
                </div>
            </header>
        </nav>
    )
}

export default Menu