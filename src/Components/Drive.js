import React from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FileList from "./FileList";
import FileContainer from "./FileContainer";
import { useDispatch } from "react-redux";
import { setBoolean } from "../Slices/Bool/boolSlice";
function Drive() {
  const dispatch = useDispatch();
  return (
    <Container onClick={() => dispatch(setBoolean({ modelBools: false }))}>
      <Title>
        <span>My Drive</span>
        <ArrowDropDownIcon />
      </Title>
      <FileContent>
        <SemiTitle>Suggested</SemiTitle>
        <GridContainer>
          <FileList />
        </GridContainer>
        <Margin>
          <SemiTitle>Folders</SemiTitle>
          <GridContainer>
            <FileContainer />
          </GridContainer>
        </Margin>
      </FileContent>
    </Container>
  );
}

export default Drive;

const Container = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px 30px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(0 0 0 /0.1);
  padding-bottom: 13px;
  align-items: center;
  svg {
    margin-left: 10px;
    color: #5f6368;
  }
  span {
    font-family: Google Sans, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #202124;
  }
`;
const FileContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  overflow-y: scroll;
  flex-grow: 1;
  max-height: 100vh;
  margin-bottom: 30px;
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    transition: all 200ms ease-out;
    max-height: 100px;
    :hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;
const SemiTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  color: #5f6368;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 20px 0;
`;
const Margin = styled.div``;
