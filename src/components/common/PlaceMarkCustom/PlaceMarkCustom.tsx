import {Placemark} from "react-yandex-maps";
import React, {FC, useState} from "react";
import {IPlaceMark} from "../../../types/types";
import style from "./PlaceMarkCustom.module.scss";
import {useNavigate} from "react-router-dom";

import point0 from "../../../assets/png/point_black/point0.png";
import point1 from "../../../assets/png/point_black/point1.png";
import point2 from "../../../assets/png/point_black/point2.png";
import point3 from "../../../assets/png/point_black/point3.png";
import point4 from "../../../assets/png/point_black/point4.png";
import point5 from "../../../assets/png/point_black/point5.png";
import point6 from "../../../assets/png/point_black/point6.png";
import point7 from "../../../assets/png/point_black/point7.png";

import point0s from "../../../assets/png/point_orange/point0.png";
import point1s from "../../../assets/png/point_orange/point1.png";
import point2s from "../../../assets/png/point_orange/point2.png";
import point3s from "../../../assets/png/point_orange/point3.png";
import point4s from "../../../assets/png/point_orange/point4.png";
import point5s from "../../../assets/png/point_orange/point5.png";
import point6s from "../../../assets/png/point_orange/point6.png";
import point7s from "../../../assets/png/point_orange/point7.png";


import {period} from "../../../helpers/helpers";

const point = {
    "0": point0,
    "1": point1,
    "2": point2,
    "3": point3,
    "4": point4,
    "5": point5,
    "6": point6,
    "7": point7,
}

const pointSelected = {
    "0": point0s,
    "1": point1s,
    "2": point2s,
    "3": point3s,
    "4": point4s,
    "5": point5s,
    "6": point6s,
    "7": point7s,
}

interface IPlaceMarkCustom extends IPlaceMark {
    selectedId: string | null
}

export const PlaceMarkCustom: FC<IPlaceMarkCustom> = ({
                                                          id,
                                                          title,
                                                          geometry,
                                                          direction,
                                                          img,
                                                          year,
                                                          selectedId
                                                      }) => {
    const navigate = useNavigate();

    const [hover, setHover] = useState(false);

    const onClickHandler = () => {
        navigate(`/${id}`)
    }

    //@ts-ignore
    const iconImageHref = !selectedId
        //@ts-ignore
        ? point[String(direction)]
        //@ts-ignore
        : selectedId === id ? pointSelected[String(direction)] : point[String(direction)]

    return (
        <Placemark modules={['geoObject.addon.hint']}
                   geometry={geometry}
                   properties={{
                       hintContent: `
                            <div class=${style.hint}>
                                <img src='${img.small}'>
                                <p class=${style.title}>${title}</p> 
                                <p class=${style.period}>${period(year)}</p>                               
                            </div>
                           `,
                   }}
                   options={{
                       hintOpenTimeout: 0,
                       hintCloseTimeout: 0,
                       //hintOffset: [50, 50],
                       hideIconOnBalloonOpen: false,
                       iconLayout: "default#image",
                       // @ts-ignore
                       iconImageHref: iconImageHref,
                       iconImageSize: [hover ? 16 : 14, hover ? 16 : 14],
                       iconImageOffset: [hover ? -8 : -7, hover ? -8 : -7],
                   }}
                   onClick={onClickHandler}
                   onMouseEnter={() => setHover(true)}
                   onMouseLeave={() => setHover(false)}
        />
    )
}
