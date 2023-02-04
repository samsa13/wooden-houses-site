
import { FC, useEffect } from 'react'
import './navbar.scss'
import { navScroll } from './animation/navScroll'
import { Breakpoint } from 'react-socks';
import { Link } from 'react-router-dom';



const NavBar: FC = () => {

    useEffect(navScroll, []);

    const onClick = () => {

        const navList = document.getElementById('nav-list');

        if (navList?.classList.contains('is-visible')) {
            navList.classList.remove('is-visible');
            navList.classList.add('is-not-visible');
        } else {
            navList?.classList.add('is-visible');
            navList?.classList.remove('is-not-visible');
        }

    };

    return (
        <nav id="navbar-section" className="nav-section" >
            <div id='navbar' className='nav'>
                <div className='logo'>
                    {/*company logotipe --> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M288 350.1L288 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L447.3 128.1C434.9 127.2 422.3 131.1 412.5 139.9C377.1 171.5 346.9 207.6 325.2 242.7C304.3 276.5 288 314.9 288 350.1H288zM509 221.5C516.9 211.6 525.8 200.8 535.5 191.1C541.1 186.9 549.9 186.9 555.5 192C580.2 214.7 601.1 244.7 615.8 273.2C630.4 301.2 640 329.9 640 350.1C640 437.9 568.7 512 480 512C390.3 512 320 437.8 320 350.1C320 323.7 332.7 291.5 352.4 259.5C372.4 227.2 400.5 193.4 433.8 163.7C439.4 158.7 447.1 158.8 453.5 163.8C473.3 181.6 491.8 200.7 509 221.5V221.5zM550 336.1C548 332.1 546 328.1 543 324.1L507 367C507 367 449 293 445 288C415 324.1 400 346 400 370C400 419 436 448 481 448C499 448 515 443 530 432.1C560 412 568 370 550 336.1z" /></svg>
                    <div>
                        <p>Строительство домов в Ярославской области</p>
                        <h4>ДОМА ДЕРЕВЯННЫЕ</h4>
                    </div>
                </div>
                <Breakpoint customQuery="(max-width: 1269px)">
                    <button className='menu' onClick={onClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" /></svg>
                    </button>
                </Breakpoint>
                <ul className="nav-list is-not-visible" id='nav-list'>
                    <li>
                        <a href="#main" onClick={onClick}>Главная</a>
                    </li>
                    <li>
                        <a href="#about-us" onClick={onClick}>О нас</a>
                    </li>
                    <li>
                        <a href="#gallery" onClick={onClick}> Галерея</a>
                    </li>
                    <li>
                        <a href="#contacts" onClick={onClick}>Контакты</a>
                    </li>
                </ul>
            </div>

            <Breakpoint customQuery="(min-width: 1270px)">
                <a href="#main"><svg id='arrow' className='arrow _arrow-transparent' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 310.6c-12.5 12.5-32.75 12.5-45.25 0L256 221.3L166.6 310.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l112-112C239.6 147.1 247.8 144 256 144s16.38 3.125 22.62 9.375l112 112C403.1 277.9 403.1 298.1 390.6 310.6z" /></svg></a>
            </Breakpoint>

        </nav>



    )
}

export default NavBar
