import {BrowserRouter as Router, Switch} from "react-router-dom";

import RouteWithSubRoutes from "./RouteWithSubRoutes";

import BasicLayout from "./Layout/BasicLayout";
import AdminLayout from "./Layout/AdminLayout";
import AuthLayout from "./Layout/AuthLayout";

import Blog from "./Page/Admin/Blog";
import Category from "./Page/Admin/Category";
import Quiz from "./Page/Admin/Quiz";

import Home from "./Page/Basic/Home";
import Login from "./Page/Auth/Login";
import Register from "./Page/Auth/Register";




const routes = [
  {
    path: "/basic",
    component: BasicLayout,
    routes:[
      {
        path: "",
        component: Home
      }
    ]
  },
  {
    path: "/admin",
    component: AdminLayout,
    routes: [
      {
        path: "/admin/blog",
        component: Blog
      },
      {
        path: "/admin/category",
        component: Category
      },
      {
        path: "/admin/quiz",
        component: Quiz
      }
    ]
  },
  {
    path: "/auth",
    component: AuthLayout,
    routes: [
      {
        path: "/auth/login",
        component: Login
      },
      {
        path: "/auth/register",
        component: Register
      }
      
    ]
  },
];

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      
        <Router>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
