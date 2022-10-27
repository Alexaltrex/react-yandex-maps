import React from "react";
import style from "./Header.module.scss";
import {Link} from "react-router-dom";
import MapIcon from '@mui/icons-material/Map';

export const Header = () => {
    return (
        <header className={style.header}>
            <Link to="/" className={style.logo}>
                <MapIcon sx={{color: "#FFF"}}/>
                <p>Yandex Map - Retro View of Gzhatsk</p>
            </Link>
        </header>
    )
}
