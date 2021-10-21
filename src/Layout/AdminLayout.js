import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blog from "../Page/Admin/Blog"

class AdminLayout extends Component{
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="dashboard">
                            <Blog />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default AdminLayout;