import React from 'react'
import { Outlet } from 'react-router-dom'
import './layout.scss'

const Layout = () => {
    return (
        <div>
            <header>
               
            </header>

            <main className='container'>
                <Outlet />
            </main>

            <footer className='container'>
                <div className='company-name'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M288 350.1L288 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L447.3 128.1C434.9 127.2 422.3 131.1 412.5 139.9C377.1 171.5 346.9 207.6 325.2 242.7C304.3 276.5 288 314.9 288 350.1H288zM509 221.5C516.9 211.6 525.8 200.8 535.5 191.1C541.1 186.9 549.9 186.9 555.5 192C580.2 214.7 601.1 244.7 615.8 273.2C630.4 301.2 640 329.9 640 350.1C640 437.9 568.7 512 480 512C390.3 512 320 437.8 320 350.1C320 323.7 332.7 291.5 352.4 259.5C372.4 227.2 400.5 193.4 433.8 163.7C439.4 158.7 447.1 158.8 453.5 163.8C473.3 181.6 491.8 200.7 509 221.5V221.5zM550 336.1C548 332.1 546 328.1 543 324.1L507 367C507 367 449 293 445 288C415 324.1 400 346 400 370C400 419 436 448 481 448C499 448 515 443 530 432.1C560 412 568 370 550 336.1z" /></svg>
                    <div>
                        <p>Строительство домов в Ярославской области</p>
                        <h4>ДОМА ДЕРЕВЯННЫЕ</h4>
                    </div>
                </div>
                {/*company logotipe --> */}
                <div>
                    <p className='strong_font'>+7 (915) 967-88-82,</p>
                    <p className='strong_font'>+7 (909) 277-19-64</p>
                </div>
                <div>
                    <p><a className='mail'
                        href="mailto:doma_derevyannye@mail.ru"
                        target="_blank"
                        rel="noreferrer"
                    >doma_derevyannye@mail.ru</a>
                    </p>
                </div>
                <div>
                    <p>Ул. Димитрова <span className='strong_font'>1 - 31</span></p>
                    <p>г. Рыбинск, Ярославская обл.</p>
                </div>

            </footer>
        </div>
    )
}

export { Layout }
