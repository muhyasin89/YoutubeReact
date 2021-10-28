import React from 'react';
import {Switch} from "react-router-dom";
import RouteWithSubRoutes from '../RouteWithSubRoutes';

import Sidebar from '../Components/Sidebar';
import HeadBar from '../Components/HeadBar';


function AdminLayout ({routes}){
    return (
        <div>
            <HeadBar />
            <Sidebar />
            <Switch>
                {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </div>
    )
}

export default AdminLayout;