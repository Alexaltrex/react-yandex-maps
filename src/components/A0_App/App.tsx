import React from 'react';
import style from "./App.module.scss"
import {Header} from "../A1_Header/Header";
import {Route, Routes } from 'react-router-dom';
import {HomePage} from "../B1_HomePage/HomePage";
import {PhotoPage} from "../B2_PhotoPage/PhotoPage";

const routes = [
    { path: "/", element: <HomePage/> },
    { path: "/:id", element: <PhotoPage/> },
];


export const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <main className={style.main}>
               <Routes>
                   {
                       routes.map(({path, element}, index) => (
                           <Route key={index} path={path} element={element}/>
                       ))
                   }
               </Routes>
            </main>
        </div>
    );
}

