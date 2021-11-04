import React from 'react';
import {Routes } from "react-router-dom";
import RouteWithSubRoutes from '../RouteWithSubRoutes';

function BasicLayout ({routes}){
    return (
        <div>
            <Routes>
                {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Routes>
        </div>
    )
}

export default BasicLayout;