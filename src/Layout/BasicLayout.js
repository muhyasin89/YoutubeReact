import React from 'react';
import {Switch } from "react-router-dom";
import RouteWithSubRoutes from '../RouteWithSubRoutes';

function BasicLayout ({routes}){
    return (
        <div>
            <Switch>
                {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </div>
    )
}

export default BasicLayout;