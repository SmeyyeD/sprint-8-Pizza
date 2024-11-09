import React from "react";
import './App.css'
import './Form.jsx'
function Header() {
    return (
        <div className="display-flex flex-direction-column justify-content align-items max-width-div-header max-height-div-header background-color-header color-white gap-2rem ">
            <h1 className="font-barlow fontsize-header-h1">Teknolojik Yemekler</h1>
            <nav>
                <ul className="fontsize-header-ul display-flex gap-1rem list-style-type-none">
                    <li>
                        <a className="text-decoration-none" href="">Anasayfa-</a>
                    </li>
                    <li>
                        <a className="text-decoration-none" href="">Sipariş Oluştur</a>
                    </li>
                </ul>
            </nav>



        </div>
    )
}
export default Header
