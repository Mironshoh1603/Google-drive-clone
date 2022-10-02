// import { Container } from '@mui/material'
import { Folder } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function FileContainer() {
  return (
    <Container>
      <Folder />
      <span>Movies</span>
    </Container>
  );
}

export default FileContainer;

const Container = styled.div`
  width: 287px;
  height: 48px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0 0 0 /0.35);
  border-radius: 4px;
  svg {
    height: 24px;
    width: 24px;
    color: rgba(95, 99, 104);
    margin-left: 5px;
  }
  span {
    font-size: 13px;
    margin-left: 10px;
  }
`;
