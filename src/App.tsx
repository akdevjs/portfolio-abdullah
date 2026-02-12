import React from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { ThemeProvider } from "./contexts";
import { AnimatePresence } from "framer-motion";
// @ts-ignore
import "./assets/css/app.css";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
// @ts-ignore
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/project/:id">
          <ProjectDetails />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <SmoothScroll />
      <CustomCursor />
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
