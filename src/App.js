// import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Drive from "./Components/Drive";
import Model from "./Components/Model";
function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Drive />} />
        </Routes>
      </Container>
      <Model />
    </Router>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;
