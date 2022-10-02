import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Avatar, ButtonGroup } from "@mui/material";

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src="/img/google-logotip.png" alt="google drive" />
          <span>Google Drive</span>
        </Logo>

        <InputContainer>
          <SearchContainer>
            <ButtonGroup>
              <SearchIcon />
            </ButtonGroup>

            <input type="text" placeholder="Search  in Drive" />
          </SearchContainer>
        </InputContainer>

        <RightContainer>
          <LeftSection>
            <HelpOutlineIcon />
            <SettingsOutlinedIcon />
          </LeftSection>
          <RightSection>
            <AppsOutlinedIcon className="app" />
            <Avatar />
          </RightSection>
        </RightContainer>
      </Wrapper>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #ffffff;
  padding: 2px;
  border-bottom: 1px solid rgba(0 0 0 /0.2);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
  }
  span {
    font-family: "Product Sans", Arial, sans-serif;
    color: #516368;
    font-size: 22px;
    padding-left: 8px;
  }
`;
const InputContainer = styled.div`
  flex: 1;
`;
const SearchContainer = styled.div`
  width: 64%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0 0 0 /0.05);
  svg {
    margin-left: 10px;
    color: #5f6368;
  }
  input {
    width: 90%;
    height: 80%;
    font-family: Sans, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
    margin: 0 auto;
    background-color: transparent;
    :focus {
      outline: none;
    }
    border: none;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;
const RightSection = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: #5f6368;
    padding: 5px;
    cursor: pointer;
    border-radius: 50%;
    transition: all 200ms ease-out;
    :hover {
      background-color: rgba(0, 0, 0, 0.09);
    }
  }
  .app {
    margin-right: 15px;
  }
`;
const LeftSection = styled(RightSection)`
  margin-right: 40px;
  svg {
    margin: 0 10px;
  }
`;
