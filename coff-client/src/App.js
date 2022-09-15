import React from "react";
import Home from "./components/Home";
import Nomatch from "./components/Nomatch";
import {Route,Routes,BrowserRouter} from "react-router-dom";
import Posts from "./components/Posts";
function App() {
  return (


<Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Posts" element={<Posts/>} />
          <Route path="*" element={<Nomatch/>} />

     </Routes> 

  );
}

export default App;
