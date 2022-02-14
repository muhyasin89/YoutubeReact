import {BrowserRouter as Router, Switch} from "react-router-dom";

import RouteWithSubRoutes from "./RouteWithSubRoutes";

import PageLayout from "./Layout/PageLayout";
import AdminLayout from "./Layout/AdminLayout";
import AuthLayout from "./Layout/AuthLayout";

import Blog from "./Page/Admin/Blog";
import Category from "./Page/Admin/Category";
import Quiz from "./Page/Admin/Quiz";

import Home from "./Page/Basic/Home";
import SignIn from "./Page/Auth/SignIn";
import SignUp from "./Page/Auth/SignUp";




const routes = [
  {
    path: "/page",
    component: PageLayout,
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
        path: "/auth/signin",
        component: SignIn
      },
      {
        path: "/auth/signup",
        component: SignUp
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
