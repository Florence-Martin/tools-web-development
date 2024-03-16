import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAppContext } from "./context/index.js";
import Home from "./pages/Home";
import Single from "./pages/Single";
import NotFound from "./pages/NotFound";
import Mentions from "./pages/MentionsLegales";
import About from "./pages/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import ArticleList from "./components/ArticleList";

function App() {
  const { posts } = useAppContext();

  useEffect(() => {
    console.log("Posts in App:", posts);
  }, [posts]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:_id" element={<Single />} />
          <Route path="articleList" element={<ArticleList />} />
          <Route path="mentions" element={<Mentions />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
