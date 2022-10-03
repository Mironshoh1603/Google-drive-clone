import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Drive from "./Components/Drive";
import Model from "./Components/Model";
import FolderModel from "./Components/FolderModel";
import PhotoModel from "./Components/PhotoModel";
import PhotoDisplay from "./Components/PhotoDisplay";
import { useSelector, useDispatch } from "react-redux";
import { selectUid, setLogIn, setLogOut } from "./Slices/user/userSlice";
import Login from "./Components/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import Sidebar from "./Components/Sidebar";

function App() {
  const user = useSelector(selectUid);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setLogIn({ uid: user.uid, photo: user.photoURL }));
      } else {
        dispatch(setLogOut({ uid: null, photo: null }));
      }
    });
  });

  return (
    <Router>
      <Header />
      {user ? (
        <>
          <Container>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Drive />} />
            </Routes>
          </Container>
          <Model />
          <FolderModel />
          <PhotoModel />
          <PhotoDisplay />
        </>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;
