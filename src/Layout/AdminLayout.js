import React from 'react';
import {Routes} from "react-router";
import RouteWithSubRoutes from '../RouteWithSubRoutes';

import Sidebar from '../Components/Sidebar';
import HeadBar from '../Components/HeadBar';


function AdminLayout ({routes}){
    return (
        <div>
            <HeadBar props={true} />
            <Sidebar />
            <Routes>
                {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Routes>
        </div>
    )
}

export default AdminLayout;