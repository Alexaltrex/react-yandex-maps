import React from "react";
import style from "./PhotoPage.module.scss"
import { useParams } from 'react-router-dom';
import {MapComponent} from "../B0_MapComponent/MapComponent";
import {placeMarkDataMock} from "../../data.mock";
import {IPlaceMark} from "../../types/types";
import {RangeSlider} from "../common/RangeSlider/RangeSlider";
import {period} from "../../helpers/helpers";

const directionString = {
    0: "север",
    1: "северо-восток",
    2: "запад",
    3: "юго-восток",
    4: "юг",
    5: "юго-запад",
    6: "запад",
    7: "северо-запад",
}

export const PhotoPage = () => {
    const {id} = useParams();
    const {title, source, geometry, direction, img, year} = placeMarkDataMock.find(el => el.id === id) as IPlaceMark

    return (
        <div className={style.photoPage}>
            <div className={style.left}>
                <img src={img.full} alt=""/>
                <h2 className={style.title}>{title}</h2>
                <p className={style.item}><span>Источник: </span>{source}</p>
                <p className={style.item}><span>Период съемки: </span>{period(year)}</p>
                {/*@ts-ignore*/}
                <p className={style.item}><span>Направление съемки: </span>{directionString[String(direction)]}</p>
            </div>
            <div className={style.right}>
                <MapComponent className={style.map} center={geometry} selectedId={id}/>
                <RangeSlider/>
            </div>

        </div>
    )
}
