import React from "react";
import style from "./HomePage.module.scss"
import {MapComponent} from "../common/MapComponent/MapComponent";
import {RangeSlider} from "../common/RangeSlider/RangeSlider";

export const HomePage = () => {
    return (
        <div className={style.homePage}>
            <MapComponent className={style.map}/>
            <RangeSlider/>
        </div>
    )
}
