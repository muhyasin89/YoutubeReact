import { BrowserRouter, Route, Switch } from "react-router-dom";

import BasicLayout from "./Layout/BasicLayout";
import AdminLayout from "./Layout/AdminLayout";
import AuthLayout from "./Layout/AuthLayout";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
                <BasicLayout />
            </Route>
            <Route exact path="/admin">
                <AdminLayout />
            </Route>
            <Route exact path="/auth">
                <AuthLayout />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
