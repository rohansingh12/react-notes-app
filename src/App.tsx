import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Dashboard from "./components/Dashboard";
// import Content from "./components/Content";
// import CreateContent from "./components/CreateContent";

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/notes/:slug" element={<Content/>}></Route>
        <Route path="/create" element={<CreateContent/>}></Route> */}
      </Routes>
    </Router>
  )
}

