import {action, makeObservable, observable} from "mobx";

export class AppStore {
    yearMin: number = 1900
    yearMax: number = 2000

    constructor() {
        makeObservable(this,
            {
                yearMin: observable,
                yearMax: observable,
                setYearMin: action.bound,
                setYearMax: action.bound,
            }
        )
    }

    setYearMin(yearMin: number) {
        this.yearMin = yearMin;
    }

    setYearMax(yearMax: number) {
        this.yearMax = yearMax;
    }

}
