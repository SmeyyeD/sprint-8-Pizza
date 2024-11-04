import React from "react";
import './index.css'
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

function Header() {

    return (

        <div>
            <div className="width">
                <div>
                    <h1 className="tecno">Teknolojik Yemekler</h1>
                </div>

                <BrowserRouter>
                    <Switch>
                        <Route>
                            <NavLink to="/" exact>
                                Anasayfa-
                            </NavLink>

                            <NavLink to="/siparis" >
                                Sipariş Oluştur
                            </NavLink>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}
export default Header