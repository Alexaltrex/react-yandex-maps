import React, {createContext} from "react";
import {App} from "./App";
import {YMaps} from "react-yandex-maps";
import {HashRouter} from "react-router-dom";
import {RootStore, store} from "../../store/RootStore";

export const StoreContext = createContext<RootStore>({} as RootStore)

export const AppContainer = () => {
    return (
        <StoreContext.Provider value={store}>
            <YMaps>
                <HashRouter>
                    <App/>
                </HashRouter>
            </YMaps>
        </StoreContext.Provider>

    )
}
