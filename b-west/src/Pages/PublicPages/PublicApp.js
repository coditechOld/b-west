import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import {HomePage} from "./HomePage";

// import './App.css';
import '../../assets/css/ionicons.min.css';
import '../../assets/css/bootstrap/css/bootstrap.min.css';
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/main.css';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';
// SLIDER REVOLUTION 4.x CSS SETTINGS
import '../../assets/rs-plugin/css/settings.css';
//  COLORS
import '../../assets/css/default.css';
import {NavLink} from "react-router-dom";



const PublicApp = () => (
    <div id={'wrap'}>

        {/* Header */}
        <header className="header">
            <div className="sticky">
                <div className="container">
                    <div className="logo"><a href="index.html">
                        <img src="/assets/images/logo.png" alt={""}/></a></div>
                    {/* Nav */}
                    <nav>
                        <ul id="ownmenu" className="ownmenu">
                            <li className="active">
                                <NavLink to={'/'}>Home</NavLink>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        <Switch>

            <Route exact path="/" component={HomePage}/>
        </Switch>
    </div>
);

export default PublicApp;