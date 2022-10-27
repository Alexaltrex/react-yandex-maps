import React, {FC} from "react";
import style from "./RangeSlider.module.scss";
import {Slider} from "@mui/material";
import {useStore} from "../../../store/useStore";
import {yearMaxConst, yearMinConst} from "../../../consts/const";
import {observer} from "mobx-react-lite";

interface IRangeSlider {

}

export const RangeSlider: FC<IRangeSlider> = observer(({

                                              }) => {
    const {appStore: {
        yearMin,
        yearMax,
        setYearMin,
        setYearMax
    }} = useStore()

    const onChangeHandler = (event: Event, newValue: number | number[]) => {
        //console.log(newValue);
        setYearMin((newValue as [number, number])[0]);
        setYearMax((newValue as [number, number])[1]);
    };

    return (
        <div className={style.rangeSlider}>
            <Slider value={[yearMin, yearMax]}
                    onChange={onChangeHandler}
                    valueLabelDisplay="on"
                    min={yearMinConst}
                    max={yearMaxConst}
                    sx={{
                        "& .MuiSlider-thumb": {
                            width: 40,
                            borderRadius: 0,
                            border: "1px solid #FFF",

                            "&.Mui-active": {
                                boxShadow: "none",
                            },
                            "&:hover": {
                                boxShadow: "none",
                            },
                            "&::before": {
                                display: "none",
                            },
                            "&::after": {
                                display: "none",
                            }
                        },

                        "& .MuiSlider-track": {
                            borderRadius: 0,
                        },

                        "& .MuiSlider-valueLabel": {
                            backgroundColor: "transparent",
                            transform: "none",
                            top: "23px",

                            "&:before": {
                                display: "none",
                            }

                        }
                    }}
            />
        </div>
    )
})
