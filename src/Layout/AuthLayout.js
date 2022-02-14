import React from 'react';
import {Switch} from "react-router-dom";
import RouteWithSubRoutes from '../RouteWithSubRoutes';

import HeadBar from '../Components/HeadBar';


function AuthLayout ({routes}){
    return (
        <div>
            <HeadBar props={true} />
            <Switch>
                {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </div>
    )
}

export default AuthLayout;