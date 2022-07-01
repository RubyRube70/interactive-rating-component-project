import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import ActiveRating from './ActiveRating'
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element ={<ActiveRating/>}></Route>
            <Route element = {<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
)

export default Router;