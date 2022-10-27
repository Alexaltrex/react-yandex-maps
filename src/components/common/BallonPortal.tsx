import React, {FC, useEffect} from "react";
import {createPortal} from "react-dom";

interface IBalloonPortal {
    children: any
    balloonContentId: string
}

export const BalloonPortal: FC<IBalloonPortal> = ({children, balloonContentId}) => {
    const mount = document.getElementById(balloonContentId)
    const el = document.createElement('div');

    useEffect(() => {
        if (mount) {
            mount.appendChild(el)
        }
        // return () => {
        //     if (mount) {
        //         mount.removeChild(el);
        //     }
        // }
    }, [el, mount])

    if (!mount) {
        return null
    }

    return (
        createPortal(children, el)
    )
}
