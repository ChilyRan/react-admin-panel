import Home from "./Pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Pages/login/Login";
import List from "./Pages/list/List";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  console.log("Hello World")
  const [dark, setDark] = useState(false)
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={ darkMode ? "app dark" : "app"}>
      <BrowserRouter>
          <Routes>
            <Route path="/" >
              <Route index element={<Home/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="users">
                <Route index element={<List/>}/>
                <Route path=":userId" element={<Single/>}/>
                <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
              </Route>
              <Route path="products">
                <Route index element={<List/>}/>
                <Route path=":pruductId" element={<Single/>}/>
                <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
              </Route>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
