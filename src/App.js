import {BrowserRouter as Router, Routes} from "react-router-dom";

import RouteWithSubRoutes from "./RouteWithSubRoutes";

import BasicLayout from "./Layout/BasicLayout";
import AdminLayout from "./Layout/AdminLayout";
import AuthLayout from "./Layout/AuthLayout";

import Blog from "./Page/Admin/Blog";
import Category from "./Page/Admin/Category";

import Home from "./Page/Basic/Home"
import HeadBar from "./Components/HeadBar";




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
      }
      
    ]
  },
  {
    path: "/auth",
    component: AuthLayout
  }
];

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-gray-400">Welcome </h1>
        <Router>
          <Routes>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
