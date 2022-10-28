import {Clusterer, Map, withYMaps} from "react-yandex-maps";
import React, {FC} from "react";
import "./mapComponent.scss";
import {placeMarkDataMock} from "../../../data.mock";
import {PlaceMarkCustom} from "../PlaceMarkCustom/PlaceMarkCustom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";

interface IMapComponent {
    className: string
    center?: [number, number]
    selectedId?: string
}

export const MapComponent: FC<IMapComponent> = observer(({
                                                             className,
                                                             center = [55.55326511694859, 34.99684895533231],
                                                             selectedId = null
                                                         }) => {
    const {appStore: {yearMin, yearMax}} = useStore();

    return (
        <Map state={{
            center,
            zoom: 15,
            controls: [
                'zoomControl',
                'fullscreenControl',
                // 'geoObject.addon.balloon',
                // 'geoObject.addon.hint'
            ],
        }}
             modules={['control.ZoomControl', 'control.FullscreenControl']}
             className={className}
        >
            <Clusterer options={{
                preset: 'islands#invertedVioletClusterIcons',
                groupByCoordinates: false,
                gridSize: 8
            }}>
                {
                    placeMarkDataMock
                        .filter(el => {
                            if (el.year[0] === el.year[1]) {
                                return el.year[0] >= yearMin && el.year[0] <= yearMax;
                            } else {
                                return ((el.year[0] >= yearMin && el.year[0] <= yearMax) || (el.year[1] >= yearMin && el.year[1] <= yearMax))
                            }
                })
                        .map(placeMark => (
                        <PlaceMarkCustom key={placeMark.id} selectedId={selectedId} {...placeMark}/>
                    ))
                }
            </Clusterer>
        </Map>
    )
})


