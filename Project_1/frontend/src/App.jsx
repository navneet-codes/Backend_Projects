import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";
import Header from "./pages/Header";

const App = () => {
  return (
    <Router>
      <div className=" h-screen flex flex-col items-center overflow-hidden">
        <Header />
        <Routes>
          <Route path="/Create-post" element={<CreatePost />} />
          <Route path="/Feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
